package com.websopti.ngosys.dto;

import java.sql.Date;
import java.time.Year;
import lombok.Data;

@Data
public class ExpensesDto {

	private Long id;

	private Date dateofExpenses;

	private String month;

	private Year year;

	private Long salary;

	private Long otherExpenses;

	private String description;

}
