package com.websopti.ngosys.entity;
import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Employee {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
    private String employeeName;

	private Date joiningDate;
	
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

	
	
}

