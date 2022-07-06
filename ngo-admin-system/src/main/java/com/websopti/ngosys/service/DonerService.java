package com.websopti.ngosys.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.websopti.ngosys.dto.DonerDto;
import com.websopti.ngosys.dto.DonerListDTO;
import com.websopti.ngosys.dto.DonerPageableResponse;
import com.websopti.ngosys.entity.Doner;
import com.websopti.ngosys.entity.Volunteer;
import com.websopti.ngosys.repository.DonerRepository;

@Service
public class DonerService {

	@Autowired
	private DonerRepository donerRepository;

	// save
	public Doner save(DonerDto donerDto) {
		Doner doner = this.convertDtoToEntity(donerDto);
		return donerRepository.save(doner);
	}

	// GetByid
	public DonerDto get(Long donerId) {
		Doner doner = this.findById(donerId);
		DonerDto donerDto = this.convertEntityToDto(doner);
		return donerDto;
	}

	// GetAllId
	public List<Doner> getAllId() {
		return donerRepository.findAll();
	}

	// Remove
	public void deleteId(Long donerId) {
		if (findById(donerId) != null) {

			donerRepository.deleteById(donerId);
		} else {
			System.out.println("Not Available");

		}
	}

	public Page<DonerPageableResponse> getWithParams(DonerListDTO donerListDto) {
		Pageable page = PageRequest.of(donerListDto.getPageNo(), donerListDto.getPageSize(), Direction.DESC,
				"date_of_donation");
		// return donerRepository.findAll(page);

		return donerRepository.findDonerData(donerListDto.getSearchStr(), page);
	}

	public Doner findById(Long donerId) {
		return donerRepository.findById(donerId).orElse(null);

	}

	public List<Doner> getAllActive() {
		return donerRepository.findByIsPresentTrue();
	}

	/*
	 * Convert Dto to Entity
	 * 
	 */

	private Doner convertDtoToEntity(DonerDto donerDto) {
		Doner doner = new Doner();

		BeanUtils.copyProperties(donerDto, doner);

		return doner;
	}

	public void donerActiveDeactive(Long donerId, Boolean isPresent) {
		Doner doner = this.findById(donerId);
		if (doner != null) {
			doner.setIsPresent(isPresent);
			donerRepository.save(doner);
		} else {
			System.out.println("Doner not found at active deactive time");
		}

	}

	/*
	 * Covert Entity To Dto
	 * 
	 */

	private DonerDto convertEntityToDto(Doner doner) {
		DonerDto donerDto = new DonerDto();

		BeanUtils.copyProperties(doner, donerDto);

		return donerDto;
	}

	public void volunteerActiveDeactive(Long volunteerId, Boolean isActive) {
		Volunteer volunteer = volunteerRepository.findById(volunteerId).orElse(null);
		if (volunteer != null) {
			volunteer.setIsActive(isActive);
			volunteerRepository.save(volunteer);
		} else {
			System.out.println("Volunteer not fount at active deactive time");
		}
	}

}
