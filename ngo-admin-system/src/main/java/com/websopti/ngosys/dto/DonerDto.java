package com.websopti.ngosys.dto;

import java.util.Date;



import lombok.Data;

@Data
public class DonerDto {

	private Long id;

	private String donerName;

	private Long contactNumber;

	private String donerEmail;

	private Date dateOfDonation;

	private String typeofDonation;

	private String reason;

	private String donationDescription;

	private Boolean isPresent;

}
