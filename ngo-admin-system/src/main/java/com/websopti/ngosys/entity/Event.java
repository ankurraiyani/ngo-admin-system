package com.websopti.ngosys.entity;

import java.util.Date;

import javax.persistence.Entity;

import lombok.Data;

@Data
@Entity
public class Event {
    
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
}
