package com.websopti.ngosys.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.websopti.ngosys.entity.Employee;
import com.websopti.ngosys.entity.Event;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

	@Query(value="SELECT * FROM employee "
			+ "WHERE ?1 IS NULL OR LOWER(employee_name) LIKE LOWER(concat('%', ?1, '%'))"
			+ "OR LOWER(contact_employye_email) LIKE LOWER(concat('%', ?1, '%'))",nativeQuery = true)
	Page<Employee> findEmployeeData(String searchStr, Pageable page);

	List<Employee> findAllByIsActiveTrue(); 

}
