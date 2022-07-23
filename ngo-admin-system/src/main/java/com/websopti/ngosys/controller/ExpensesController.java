package com.websopti.ngosys.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.websopti.ngosys.dto.ExpensesDto;
import com.websopti.ngosys.entity.Expenses;
import com.websopti.ngosys.service.ExpensesService;

@RestController
@RequestMapping("/api/expenses")
public class ExpensesController {
	
	@Autowired
	private ExpensesService expensesService;
	
	@PostMapping("/save")
	public  Expenses save(@RequestBody ExpensesDto expensesDto)
	{
		return expensesService.save(expensesDto);
	}
	
	@GetMapping("/get/all")
	public List<Expenses> getAll()
	{
		return expensesService.getAll();
	}
	
	@GetMapping("/get/{expensesId}")
	public ExpensesDto getId(@PathVariable Long expensesId)
	{
		return expensesService.getId(expensesId);
	}
	
	@DeleteMapping("/delete/{expensesId}")
	
	public void deleteId(@PathVariable Long expensesId)
	{
		expensesService.deleteId(expensesId);
	}
	
	
	
	
}
