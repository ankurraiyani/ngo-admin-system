package com.websopti.ngosys.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.websopti.ngosys.dto.DonerListDTO;
import com.websopti.ngosys.entity.Doner;
import com.websopti.ngosys.repository.DonerRepository;


@Service
public class DonerService {
	
	@Autowired	
	private DonerRepository donerRepository;
	
	//save
	public Doner save(Doner doner)
	{
		return donerRepository.save(doner);
	}
	
	// GetByid 
	public Optional<Doner> get(Long donerId)
	{
		return donerRepository.findById(donerId);
	}
	
	//GetAllId
	public List<Doner> getAllId()
	{
		return donerRepository.findAll();		
	}
	
	//Remove	
	public void  deleteId (Long donerId) {		
		if(donerRepository.findById(donerId).isPresent())
		{
			
				donerRepository.deleteById(donerId);
		}
		else
		{
			System.out.println("Not Available");
		
		}
	}
	
	public Page<Doner> getWithParams(DonerListDTO donerListDto) {
		Pageable page = PageRequest.of(donerListDto.getPageNo(), donerListDto.getPageSize(),Direction.DESC, "date_of_donation");
		//return donerRepository.findAll(page);
		
		return donerRepository.findDonerData(donerListDto.getSearchStr(),page);
	}

	public Doner findBydId(Long donerId) {
		return donerRepository.findById(donerId).orElse(null);
		
	}

}
