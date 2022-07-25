package com.websopti.ngosys.service;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.websopti.ngosys.dto.EmployeeDto;
import com.websopti.ngosys.dto.RoleDto;
import com.websopti.ngosys.entity.Employee;
import com.websopti.ngosys.entity.Role;
import com.websopti.ngosys.entity.ServiceType;
import com.websopti.ngosys.repository.EmployeeRepository;
import com.websopti.ngosys.repository.RoleRepository;


@Service
public class RoleService {

	@Autowired
	private RoleRepository roleRepository;

	public Role save(RoleDto roleDto) {
		Role role = this.convertDtoToEntity(roleDto);
		Role roleNew = roleRepository.save(role);
		return roleNew;
	}


	public RoleDto get(Long roleId) {
		Role role = this.findBydId(roleId);
		RoleDto roledto = this.convertEntityToDto(role);
		return roledto;

	}

	public Role findBydId(Long id) {
		return roleRepository.findById(id).orElse(null);
	}

	public void deleteId(Long roleId) {
//		optional<Employee> i= emplyeeRepository.findById(employeeId)
		if (findBydId(roleId) != null) {
			roleRepository.deleteById(roleId);
		} else {
			System.out.println("Not Available");
		}
	}
	public List<Role> getAll() {
		return roleRepository.findAll();
	}
	private Role convertDtoToEntity(RoleDto roleDto) {
		Role role = new Role();

		BeanUtils.copyProperties(roleDto,role);
		return role;
	}

	private RoleDto convertEntityToDto(Role role) {

		RoleDto roleDto = new RoleDto();
		BeanUtils.copyProperties(role, roleDto);
		return roleDto;
	}


}
