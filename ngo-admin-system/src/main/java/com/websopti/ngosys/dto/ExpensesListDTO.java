package com.websopti.ngosys.dto;

import lombok.Data;

@Data
public class ExpensesListDTO {
	
	private String searchStr;
	
	private int pageNo;
	
	private int pageSize;

}
