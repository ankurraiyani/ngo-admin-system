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

import com.websopti.ngosys.dto.EmployeeDto;
import com.websopti.ngosys.dto.EmployeeListDTO;
import com.websopti.ngosys.dto.EmployeePagebleResponse;
import com.websopti.ngosys.entity.Doner;
import com.websopti.ngosys.entity.Employee;
import com.websopti.ngosys.repository.EmployeeRepository;



@Service
public class EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepository;
	
	public Employee save(EmployeeDto employeeDto) {
		//return employeeRepository.save(employee);
		Employee employee = this.convertDtoToEntity(employeeDto);
		return employeeRepository.save(employee);
		}
	
	public List<Employee> getAllActive() {
		return employeeRepository.findAllByIsActiveTrue();
	}
	
	public EmployeeDto get(Long employeeId) {
		Employee employee = this.findBydId(employeeId);
		EmployeeDto employeedto=this.convertEntityToDto(employee);
		return employeedto;
		
	}
	
	
	public Employee findBydId(Long id) {
		return employeeRepository.findById(id).orElse(null);
	}
	
		public void deleteId(Long employeeId)
	{	
//		optional<Employee> i= emplyeeRepository.findById(employeeId)
		if(findBydId(employeeId) != null)
		{
			employeeRepository.deleteById(employeeId);
		}
		else
		{
			System.out.println("Not Available");
		}
	}

	
	public Page<EmployeePagebleResponse> getWithParams(EmployeeListDTO employeeListDto) {
		

		Pageable page = PageRequest.of(employeeListDto.getPageNo(), employeeListDto.getPageSize(),Direction.DESC, "joining_date");
		//return employeeRepository.findAll(page);
		
		//return employeeRepository.findEmployeeData(employeeListDto.getSearchStr(),page);
		return employeeRepository.findEmployeeData(employeeListDto.getSearchStr(), page);
	}

	public void employeeActiveDeactive(Long employeeId, Boolean isActive) {
		Employee employee =  findBydId(employeeId);
		if(employee != null) {
			employee.setIsActive(isActive);
			employeeRepository.save(employee);
		} else {
			System.out.println("Employee not fount at active deactive time");
		}
		
	}
	private Employee convertDtoToEntity(EmployeeDto employeeDto) {
		Employee employee = new Employee();

		BeanUtils.copyProperties(employeeDto, employee);
		return employee;
	}
	private EmployeeDto convertEntityToDto(Employee employee) {
		
		EmployeeDto employeeDto = new EmployeeDto();
		BeanUtils.copyProperties(employee,employeeDto);
		return employeeDto;
	}


}