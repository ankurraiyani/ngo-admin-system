package com.websopti.ngosys.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.websopti.ngosys.dto.EventListDTO;
import com.websopti.ngosys.dto.VolunteerListDTO;
import com.websopti.ngosys.entity.Doner;
import com.websopti.ngosys.entity.Employee;
import com.websopti.ngosys.entity.Event;
import com.websopti.ngosys.entity.Volunteer;
import com.websopti.ngosys.repository.VolunteerRepository;

@Service
public class VolunteerService {

	@Autowired
	private VolunteerRepository volunteerRepository;
	
	public Volunteer save(Volunteer volunteer)
	{
		return volunteerRepository.save(volunteer);
	}
	
	public Optional<Volunteer> get(Long volunteerId)
	{
		return volunteerRepository.findById(volunteerId);
	}
	
	public List<Volunteer> getAll()
	{
		return volunteerRepository.findAll();
	}
	

	public Page<Volunteer> getWithParams(VolunteerListDTO volunteerListDto) 
	{
		
		Pageable page = PageRequest.of(volunteerListDto.getPageNo(), volunteerListDto.getPageSize(),Direction.DESC, "date_of_joining");
//		return volunteerRepository.findAll(page);
		return volunteerRepository.findVolunteerData(volunteerListDto.getSearchStr(),page);
	}
	

	public void deleteId(Long volunteerId)
	{
		
		if(volunteerRepository.findById(volunteerId).isPresent())
		{
			volunteerRepository.deleteById(volunteerId);
		}
		else
		{
			System.out.println("Not Available");
		}
		
	}

	public void volunteerActiveDeactive(Long volunteerId, Boolean isActive) {
		Volunteer volunteer =  volunteerRepository.findById(volunteerId).orElse(null);
		if(volunteer != null) {
			volunteer.setIsActive(isActive);
			volunteerRepository.save(volunteer);
		} else {
			System.out.println("Volunteer not fount at active deactive time");
		}
	}

	
	public List<Volunteer> getAllActive() {
		return volunteerRepository.findAllByIsActiveTrue();
	}
	
	public Volunteer findById(Long volunteerId) {
		return volunteerRepository.findById(volunteerId).orElse(null);
		
	}

}
