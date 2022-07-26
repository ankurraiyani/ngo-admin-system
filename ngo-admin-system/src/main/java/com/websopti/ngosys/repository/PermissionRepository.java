package com.websopti.ngosys.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.websopti.ngosys.entity.Permission;


@Repository
public interface PermissionRepository extends JpaRepository<Permission, Long>{

	
}
