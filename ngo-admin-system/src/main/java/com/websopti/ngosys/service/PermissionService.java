package com.websopti.ngosys.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.websopti.ngosys.entity.Permission;
import com.websopti.ngosys.repository.PermissionRepository;


@Service
public class PermissionService {

	@Autowired
	private PermissionRepository permissionRepository;
	
	public List<Permission> getAll() {
		return this.permissionRepository.findAll();
	}
}
