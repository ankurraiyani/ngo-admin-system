package com.websopti.ngosys.dto;

import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
public class ExpensesDto {

private Long id;
	

	private String typeofExpenses;	
		
	private Long amount;
	
	private String gst;
	
	private String gstPercentage;
	
	private java.util.Date billingDate;
	
	private java.util.Date transactionDate;
	
	private String paymentMethod;
	
	private String description;
	
	private Long checkNumber;
	
//	private byte[] imageOutPut;
//	
//	private MultipartFile imageInPut;
//	
//	private Boolean isImageUpload;
}

