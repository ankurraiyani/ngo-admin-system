package com.websopti.ngosys.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.websopti.ngosys.dto.EmployeePagebleResponse;
import com.websopti.ngosys.entity.Employee;
import com.websopti.ngosys.entity.Event;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

	@Query(value = "SELECT e.id as id,e.employee_name as employeeName,e.joining_date as joiningDate,"
			+ " e.leaving_date as leavingDate,e.employee_timing as employeeTiming,e.aadharcard_no as aadharcardNo,"
			+ " e.address as address,e.contact_number as contactNumber,e.contact_employye_email as contactEmployyeEmail,"
			+ " e.role_of_employee as roleOfEmployee,e.age as age,e.gender as gender,e.salary as salary,e.is_active as isActive "
			+ " FROM employee e"
			+ " WHERE ?1 IS NULL OR LOWER(employee_name) LIKE LOWER(concat('%', ?1, '%'))"
			+ " OR LOWER(contact_employye_email) LIKE LOWER(concat('%', ?1, '%'))", nativeQuery = true)
	Page<EmployeePagebleResponse> findEmployeeData(String searchStr, Pageable page);

	List<Employee> findAllByIsActiveTrue();

	

}
