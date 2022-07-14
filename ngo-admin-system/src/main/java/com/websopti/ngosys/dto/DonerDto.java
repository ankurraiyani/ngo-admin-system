package com.websopti.ngosys.dto;


import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
public class DonerDto {

	private Long id;

	private String donerName;

	private Long contactNumber;

	private String donerEmail;

	private java.sql.Date dateOfDonation;

	private String typeofDonation;

	private String reason;

	private String donationDescription;

	private Boolean isPresent;
	
	private byte[] imageOutPut;
	
	private MultipartFile imageInPut;
	
	private Boolean isImageUpload;

}
