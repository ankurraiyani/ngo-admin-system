package com.websopti.ngosys.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.websopti.ngosys.dto.EventListDTO;
import com.websopti.ngosys.dto.employeeListDTO;
import com.websopti.ngosys.entity.Employee;
import com.websopti.ngosys.entity.Event;
import com.websopti.ngosys.service.EmployeeService;




@RestController
@RequestMapping("/api/employee")
public class EmployeeController {

		
		@Autowired
		private EmployeeService employeeService;

		@PostMapping("/save")
		public Employee save(@RequestBody Employee employee) {
			return employeeService.save(employee);
		}
		@GetMapping("/get/all")
		public List<Employee> getAll() {
			return employeeService.getAll();
		}
		@GetMapping("/get/{employeeId}")
		public Employee get(@PathVariable Long employeeId) {		
			return employeeService.get(employeeId).get();
		}
		@DeleteMapping("/deleteId/{employeeId}")
		public void deleteId(@PathVariable Long employeeId)
		{
			employeeService.deleteId(employeeId);
		}
		@PostMapping("/get")
		public Page<Employee> getWithParams(@RequestBody employeeListDTO employeeListDto) {
			return employeeService.getWithParams(employeeListDto);
			
		}
}
