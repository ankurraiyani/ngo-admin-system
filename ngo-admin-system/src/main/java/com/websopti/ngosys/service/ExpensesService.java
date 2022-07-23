package com.websopti.ngosys.service;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.websopti.ngosys.dto.ExpensesDto;
import com.websopti.ngosys.entity.Expenses;
import com.websopti.ngosys.repository.ExpensesRepository;

@Service
public class ExpensesService {
	
	
	@Autowired
	private ExpensesRepository expensesRepository; 
	
	
	
	public Expenses save(ExpensesDto expensesDto)
	{
		Expenses expenses=this.convertDtoToEntity(expensesDto);
		return expensesRepository.save(expenses);
	}


	public List<Expenses> getAll() 
	{			
		return expensesRepository.findAll();
	}
	

	public ExpensesDto getId(Long expensesId) {
		
		
		Expenses expenses=this.findById(expensesId);
		ExpensesDto expensesDto=this.convertEntityToDto(expenses);
		
		return expensesDto;
	}
	
	
	
	public void deleteId(Long expensesId) {
		
		if(findById(expensesId)!=null)
		{
			expensesRepository.deleteById(expensesId);
		}
		else
		{
			System.out.println("ID NOT FOUND");
		}
		
		
	}

	
	public Expenses findById(Long id)
	{
		return expensesRepository.findById(id).orElse(null);
	}
	
	
	
	
	
	
	
	/*
	 * 
	 * CONVERT DTO TO ENTITY
	 */

	private Expenses convertDtoToEntity(ExpensesDto expensesDto)
	{
		Expenses expenses=new Expenses();
		
		BeanUtils.copyProperties(expensesDto, expenses);
		
		return expenses;
	}
	
	/*
	 * CONVERT ENTITY TO DTO
	 */
	private ExpensesDto convertEntityToDto(Expenses expenses)
	{
		ExpensesDto expensesDto=new ExpensesDto();
		
		BeanUtils.copyProperties(expenses, expensesDto);
		
		return expensesDto;
	}


	














}
