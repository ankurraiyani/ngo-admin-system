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
public class Doner {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String donerName;
	
	private Long contactNumber;
	
	private String donerEmail;
	
	private Date dateOfDonation;
	
	private String typeofDonation;
	
	@Column(columnDefinition = "text")
	private String reason;
	
	private String isRegular;
}