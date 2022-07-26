package com.websopti.ngosys.dto;

import java.util.Date;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
public class RoleDto {
	
	private Long id;

	private String roleName;
	
	private List<Long> permissionIds;
}
