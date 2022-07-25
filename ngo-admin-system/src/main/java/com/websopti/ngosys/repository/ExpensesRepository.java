package com.websopti.ngosys.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.websopti.ngosys.entity.Expenses;

public interface ExpensesRepository extends JpaRepository<Expenses, Long> {
	

}
