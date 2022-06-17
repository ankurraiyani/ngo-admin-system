package com.websopti.ngosys.dto;

import lombok.Data;

@Data
public class EventListDTO {

	private String searchStr;
	
	private int pageNo;
	
	private int pageSize;
	/*
	private String sortStr;
	
	private String direct; */
}
