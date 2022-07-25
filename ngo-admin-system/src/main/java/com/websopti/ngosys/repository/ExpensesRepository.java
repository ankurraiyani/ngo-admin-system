package com.websopti.ngosys.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.websopti.ngosys.dto.ExpensesPageableResponse;
import com.websopti.ngosys.entity.Expenses;

public interface ExpensesRepository extends JpaRepository<Expenses, Long> {
	
	@Query(value="SELECT e.id as id,e.check_number as checkNumber,"
			+ " e.amount as amount ,e.typeof_expenses as typeofExpenses,e.description as description,"
			+ " e.billing_date as billingDate,e.transaction_date as transactionDate,e.payment_method as paymentMethod,"
			+ " e.gst as gst,e.gst_percentage as gstPercentage"
			+ " FROM expenses e "
			+ " WHERE ?1 IS NULL OR LOWER(e.typeof_expenses) LIKE LOWER(concat('%', ?1, '%'))",nativeQuery = true)

	Page<ExpensesPageableResponse> findExpensesData(String searchStr, Pageable page);
	
}
