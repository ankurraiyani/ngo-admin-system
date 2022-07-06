package com.websopti.ngosys.dto;

import java.util.Date;

public interface EventPagabelReponse {
	
	public Long getId();
    
	public  String getName();

	public Date getStartDate();

	public Date getEndDate();

	public String getAddress();

	public String getCity();

	public String getVolunteers();

	public String getSponsors();

	public String getDescription();

	public String getType();

	public String getContactPerson();

	public String getContactNumber();

	public String getContactEmail();

}
