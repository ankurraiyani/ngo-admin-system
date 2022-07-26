package com.websopti.ngosys.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.websopti.ngosys.dto.DonerDto;
import com.websopti.ngosys.entity.Doner;
import com.websopti.ngosys.entity.Permission;
import com.websopti.ngosys.entity.Role;
import com.websopti.ngosys.repository.PermissionRepository;


@Service
public class PermissionService {

	@Autowired
	private PermissionRepository permissionRepository;
	
	public List<Permission> getAll() {
		return this.permissionRepository.findAll();
	}
	
	public Permission findBydId(Long id) {
		return permissionRepository.findById(id).orElse(null);
	}
	
	public Permission save(Permission permission) {
		return this.permissionRepository.save(permission);
	}
}
