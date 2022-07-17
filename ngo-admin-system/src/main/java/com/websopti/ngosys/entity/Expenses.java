package com.websopti.ngosys.entity;

import java.sql.Date;
import java.time.Year;

import javax.persistence.Column;
import javax.persistence.Entity;
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
	
	private Date  dateofExpenses;
	
	private String month;
	
	private Year year;
	
	private Long salary;
	
	private Long otherExpenses;
	
	@Column(columnDefinition = "text")
	private String description;
	
	

}
