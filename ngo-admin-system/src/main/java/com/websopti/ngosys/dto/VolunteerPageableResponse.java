package com.websopti.ngosys.dto;

import java.sql.Date;

import javax.persistence.Column;

public interface VolunteerPageableResponse {

	public long getId();

	public String getName();

	public String getContactNumber();

	public String getAddress();

	public String getEmail();

	public String getGender();

	public Integer getAge();

	public Date getDateOfJoining();

	public String getAvailableTime();

	public String getAreaOfInterest();

	public Boolean getIsActive();

}
