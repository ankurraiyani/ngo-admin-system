package com.websopti.ngosys.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.websopti.ngosys.entity.Permission;
import com.websopti.ngosys.service.PermissionService;

@RestController
@CrossOrigin
@RequestMapping("/api/permission")
public class PermissionController {

	@Autowired
	private PermissionService permissionService;
	
	@GetMapping("/get/all")
	public List<Permission> getAll() {
		return permissionService.getAll();
	}

}
