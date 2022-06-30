package com.websopti.ngosys.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.websopti.ngosys.dto.EmployeeListDTO;

import com.websopti.ngosys.entity.Employee;

import com.websopti.ngosys.repository.EmployeeRepository;

@Service
public class EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepository;
	
	public Employee save(Employee employee) {
		return employeeRepository.save(employee);
	}
	
	public List<Employee> getAll() {
		return employeeRepository.findAll();
	}
	
	public Optional<Employee> get(Long employeeId) {
		return employeeRepository.findById(employeeId);
	}
	
	public void deleteId(Long employeeId)
	{	
//		optional<Employee> i= emplyeeRepository.findById(employeeId)
		if(employeeRepository.findById(employeeId).isPresent())
		{
			employeeRepository.deleteById(employeeId);
		}
		else
		{
			System.out.println("Not Available");
		}
	}

	
	public Page<Employee> getWithParams(EmployeeListDTO employeeListDto) {
		

		Pageable page = PageRequest.of(employeeListDto.getPageNo(), employeeListDto.getPageSize());
		//return employeeRepository.findAll(page);
		
		return employeeRepository.findEmployeeData(employeeListDto.getSearchStr(),page);
	}


}