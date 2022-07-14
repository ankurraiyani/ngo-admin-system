package com.websopti.ngosys.entity;

import java.sql.Date;
import java.sql.Time;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import lombok.Data;

@Data
@Entity
public class Volunteer {

	@javax.persistence.Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String name;

	private String contactNumber;

	private String address;

	private String city;

	private String state;

	private String country;

	private String zipcode;

	private String email;

	private String gender;

	private Integer age;

	private Date dateOfJoining;

	private String availableTime;

	@Column(columnDefinition = "text")
	private String areaOfInterest;
	
	private Boolean isActive;



}
