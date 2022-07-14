package com.websopti.ngosys.dto;

import java.util.Date;

public interface EmployeePagebleResponse {
	
	public Long getId();
	
    public String getEmployeeName();

	public Date getJoiningDate();
	
	public Date getleavingDate();
	
	public String getEmployeeTiming();

	public String getAadharcardNo();

	public String getAddress();

	public String getContactNumber();

	public String getContactEmployyeEmail();
	
	public String getRoleOfEmployee();
	
	public String getAge();
	
	public String getGender();
	
	public Long getSalary();
	
	public Boolean getIsActive();

}
