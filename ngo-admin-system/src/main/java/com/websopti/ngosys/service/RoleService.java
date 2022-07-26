package com.websopti.ngosys.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.websopti.ngosys.dto.EmployeeDto;
import com.websopti.ngosys.dto.EventDto;
import com.websopti.ngosys.dto.RoleDto;
import com.websopti.ngosys.entity.Employee;
import com.websopti.ngosys.entity.Event;
import com.websopti.ngosys.entity.Permission;
import com.websopti.ngosys.entity.Role;
import com.websopti.ngosys.entity.ServiceType;
import com.websopti.ngosys.repository.EmployeeRepository;
import com.websopti.ngosys.repository.RoleRepository;

@Service
public class RoleService {

	@Autowired
	private RoleRepository roleRepository;

	@Autowired
	private PermissionService permissionService;

	public Role save(RoleDto roleDto) {
		Role role = this.convertDtoToEntity(roleDto);
		// Role roleNew = roleRepository.save(role);
		return roleRepository.save(role);
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

	public RoleDto getId(Long roleId) {
		Role role = roleRepository.findById(roleId).orElse(null);
		RoleDto roleDto = this.convertEntityToDto(role);
		return roleDto;
	}


	/*
	 * Entity To Dto
	 */
	private RoleDto convertEntityToDto(Role role) {

		RoleDto roleDto = new RoleDto();
		BeanUtils.copyProperties(role, roleDto);

		if (role.getPermissionList() != null && role.getPermissionList().size() > 0) {
			List<Long> permissionIds = new ArrayList<Long>();

			for (Permission permission : role.getPermissionList()) {
				permissionIds.add(permission.getId());
			}
			roleDto.setPermissionIds(permissionIds);
		}

		return roleDto;
	}

//	private EventDto convertEntityToDto(Event event) {
//		EventDto eventDto = new EventDto();
//		BeanUtils.copyProperties(event, eventDto);
//
//		// employee
//
//		if (event.getEmployeeList() != null && event.getEmployeeList().size() > 0) {
//			List<Long> employeeIds = new ArrayList<Long>();
//
//			for (Employee employee : event.getEmployeeList()) {
//				employeeIds.add(employee.getId());
//			}
//			eventDto.setEmployeeIds(employeeIds);
//		}

	/*
	 * Dto To Entity
	 */

	private Role convertDtoToEntity(RoleDto roleDto) {
		Role role = new Role();

		BeanUtils.copyProperties(roleDto, role);

		if (roleDto.getPermissionIds() != null && roleDto.getPermissionIds().size() > 0) {

			List<Permission> permissionList = new ArrayList<Permission>();
			for (Long permissionId : roleDto.getPermissionIds()) {
				Permission permission = this.permissionService.findBydId(permissionId);
				permissionList.add(permission);
			}
			role.setPermissionList(permissionList);
		}

		return role;
	}
}