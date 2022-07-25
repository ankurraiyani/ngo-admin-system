package com.websopti.ngosys.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.websopti.ngosys.dto.EmployeeDto;
import com.websopti.ngosys.dto.RoleDto;
import com.websopti.ngosys.entity.Employee;
import com.websopti.ngosys.entity.Role;
import com.websopti.ngosys.entity.ServiceType;
import com.websopti.ngosys.service.EmployeeService;
import com.websopti.ngosys.service.RoleService;

import java.util.List;
@RestController
@RequestMapping("/api/role")
@CrossOrigin
public class RoleController {
	
	@Autowired
	private RoleService roleService;

	@PostMapping("/save")
	public Role save(@RequestBody RoleDto roleDto) {
		return roleService.save(roleDto);
	}
	
	@GetMapping("/get/{roleId}")
	public RoleDto get(@PathVariable Long roleId) {		
		return roleService.get(roleId);
	}
	
	@DeleteMapping("/deleteId/{roleId}")
	public void deleteId(@PathVariable Long roleId)
	{
		roleService.deleteId(roleId);
	}
	
	@GetMapping("/get/all")
	public List<Role> getAll() {
		return roleService.getAll();
	}
	
	

}
