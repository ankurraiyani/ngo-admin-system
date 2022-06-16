 package com.websopti.ngosys.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Event {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
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

	@Column(columnDefinition = "text")
	private String description;

	private String type;

	private String contactPerson;

	private String contactNumber;

	private String contactEmail;
}