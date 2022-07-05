package com.websopti.ngosys.dto;

import java.util.Date;
import java.util.List;

import lombok.Data;

@Data
public class EventDto {

	private Long id;
    
    private String name;

	private Date startDate;

	private Date endDate;

	private String address;

    private String city;

	private String state;

	private String country;

	private String zipcode;
	
	private String volunteers;

	private String sponsors;

	private String description;

	private String type;

	private String contactPerson;

	private String contactNumber;

	private String contactEmail;
	
	private List<Long> employeeIds;
	
	private List<Long> donerIds;
	
//	private List<Long> volunteerIds;
}
