package com.websopti.ngosys.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.websopti.ngosys.entity.Employee;
import com.websopti.ngosys.entity.Role;


public interface RoleRepository extends JpaRepository<Role,Long> {
	
	
}
