 package com.websopti.ngosys.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

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
	
	@ManyToMany
	@JoinTable(name="event_employee", joinColumns = {
	@JoinColumn(name = "event_id")}, inverseJoinColumns = {
	@JoinColumn(name = "employee_id")})
	private List<Employee> employeeList;
	
	@ManyToMany
	@JoinTable(name="event_doner", joinColumns = {
	@JoinColumn(name = "event_id")}, inverseJoinColumns = {
	@JoinColumn(name = "doner_id")})
	private List<Doner> donerList;
	
//	@ManyToMany
//	@JoinTable(name="event_volunteer", joinColumns = {
//	@JoinColumn(name = "event_id")}, inverseJoinColumns = {
//	@JoinColumn(name = "volunteer_id")})
//	private List<Volunteer> volunteerList;
	

}
