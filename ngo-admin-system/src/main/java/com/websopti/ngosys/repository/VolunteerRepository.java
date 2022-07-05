package com.websopti.ngosys.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.websopti.ngosys.entity.Employee;
import com.websopti.ngosys.entity.Event;
import com.websopti.ngosys.entity.Volunteer;

@Repository
public interface VolunteerRepository extends JpaRepository<Volunteer, Long> {
	@Query(value = "SELECT * FROM volunteer "
			+ "WHERE ?1 IS NULL OR LOWER(name) LIKE LOWER(concat('%', ?1, '%'))", nativeQuery = true)
	Page<Volunteer> findVolunteerData(String searchStr, Pageable page);

	List<Volunteer> findAllByIsActiveTrue();

}
