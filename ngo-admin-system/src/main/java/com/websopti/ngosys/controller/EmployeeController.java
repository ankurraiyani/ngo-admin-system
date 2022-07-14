package com.websopti.ngosys.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.websopti.ngosys.dto.EmployeeDto;
import com.websopti.ngosys.dto.EmployeeListDTO;
import com.websopti.ngosys.dto.EmployeePagebleResponse;
import com.websopti.ngosys.dto.EventListDTO;
import com.websopti.ngosys.entity.Employee;
import com.websopti.ngosys.entity.Event;
import com.websopti.ngosys.service.EmployeeService;

@RestController
@RequestMapping("/api/employee")
@CrossOrigin
public class EmployeeController {

		
		@Autowired
		private EmployeeService employeeService;

		@PostMapping("/save")
		public Employee save(@RequestBody EmployeeDto employeeDto) {
			return employeeService.save(employeeDto);
		}
		
		@GetMapping("/getAll/active")
		public List<Employee> getAllActive() {
			return employeeService.getAllActive();
		}
		
		@GetMapping("/get/{employeeId}")
		public EmployeeDto get(@PathVariable Long employeeId) {		
			return employeeService.get(employeeId);
		}
		
		@DeleteMapping("/deleteId/{employeeId}")
		public void deleteId(@PathVariable Long employeeId)
		{
			employeeService.deleteId(employeeId);
		}
		
		@PostMapping("/get")
		public Page<EmployeePagebleResponse> getWithParams(@RequestBody EmployeeListDTO employeeListDto) {
			return employeeService.getWithParams(employeeListDto);
		}
		
		@PostMapping("/employeeActiveDeactive")
		public void employeeActiveDeactive(@RequestParam (value = "employeeId") Long employeeId,@RequestParam (value = "isActive") Boolean isActive ) {
			this.employeeService.employeeActiveDeactive(employeeId,isActive);
		}
}
