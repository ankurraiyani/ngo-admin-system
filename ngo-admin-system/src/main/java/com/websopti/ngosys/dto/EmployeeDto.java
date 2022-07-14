package com.websopti.ngosys.dto;

import java.util.Date;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import lombok.Data;
@Data
public class EmployeeDto {
	
	private Long id;
	
    private String employeeName;

    private java.sql.Date joiningDate;
	
	private Date leavingDate;
	
	private String employeeTiming;

	private String aadharcardNo;

	private String address;

	private String contactNumber;

	private String contactEmployyeEmail;
	
	private String roleOfEmployee;
	
	private String age;
	
	private String gender;
	
	private Long salary;
	
	private Boolean isActive;
	
	private byte[] imageOutPut;
	
	private MultipartFile imageInPut;
	
	private Boolean isImageUpload;

}
