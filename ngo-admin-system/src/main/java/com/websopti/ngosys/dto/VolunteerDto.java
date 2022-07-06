package com.websopti.ngosys.dto;

import java.sql.Date;

import javax.persistence.Column;

import lombok.Data;

@Data
public class VolunteerDto {

	private long id;

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

	private String areaOfInterest;

	private Boolean isActive;

}
