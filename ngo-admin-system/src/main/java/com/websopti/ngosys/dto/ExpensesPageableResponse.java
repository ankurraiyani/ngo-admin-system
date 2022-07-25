package com.websopti.ngosys.dto;

import java.sql.Date;
import java.time.Year;

import javax.persistence.Column;

public interface ExpensesPageableResponse {
	
	public Long getId();
	
	//public String getMonthYear();
	
//	public  java.util.Date getDateofExpenses();
		
	public Long getAmount();
	
	public String getGst();
	
	public String getGstPercentage();
	
	//public Long getBillingAmount();
	
	public java.util.Date getBillingDate();
	
	public java.util.Date getTransactionDate();
	
	public String getPaymentMethod();
	
	public String getDescription();
	
	public String getTypeofExpenses();
	
	public Long getCheckNumber();

}
