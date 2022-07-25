package com.websopti.ngosys.entity;

import java.sql.Date;
import java.time.Year;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Expenses {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	
	
	private String typeofExpenses;	
	
	private Long amount;
	
	private String gst;
	
	private String gstPercentage;
	
	private java.util.Date billingDate;
	
	private java.util.Date transactionDate;
	
	private String paymentMethod;
	
	@Column(columnDefinition = "text")
	private String description;
	
	private Long checkNumber;
	
	
	
	
	
	
	
	
//	
//	public enum TypeofExpenses {
//		
//		 SALARY("Salary"),	 
//		 TEX("Tex");
//		
//		String value;
//		
//		TypeofExpenses(String value)
//		{
//			
//			this.value=value;
//		}
//	}
//	

}
