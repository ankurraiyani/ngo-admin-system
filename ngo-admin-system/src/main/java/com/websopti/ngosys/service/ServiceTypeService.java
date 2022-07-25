package com.websopti.ngosys.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.websopti.ngosys.dto.EmployeeDto;

import com.websopti.ngosys.entity.Employee;
import com.websopti.ngosys.entity.ServiceType;

import com.websopti.ngosys.repository.ServiceTypeRepository;
@Service
public class ServiceTypeService {
	@Autowired
	private ServiceTypeRepository serviceTypeRepository;
	
	public ServiceType save(ServiceType serviceType) {
		return serviceTypeRepository.save(serviceType);
	}

	
	public Optional<ServiceType> get(Long serviceTypeId) {
		return serviceTypeRepository.findById(serviceTypeId);
	}

	public void deleteId(Long serviceTypeId) {
		if(serviceTypeRepository.findById(serviceTypeId).isPresent())
		{
			serviceTypeRepository.deleteById(serviceTypeId);
		}
		else
		{
			System.out.println("Not Available");
		}
		
	}

	public List<ServiceType> getAll() {
		return serviceTypeRepository.findAll();
	}
	
	

}
