package com.websopti.ngosys.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.websopti.ngosys.dto.VolunteerPageableResponse;
import com.websopti.ngosys.entity.Volunteer;

@Repository
public interface VolunteerRepository extends JpaRepository<Volunteer, Long> {

	@Query(value = "SELECT v.id as id ,v.name as name,v.contact_number as contactNumber,v.address as address,"
			+ " v.email as email,v.gender as gender,v.age as age,v.date_of_joining as dateOfJoining,"
			+ " v.available_time as availableTime,v.area_of_interest as areaOfInterest,v.is_active as isActive"
			+ " FROM volunteer v"
			+ " WHERE ?1 IS NULL OR LOWER(v.name) LIKE LOWER(concat('%', ?1, '%'))", nativeQuery = true)

	Page<VolunteerPageableResponse> findVolunteerData(String searchStr, Pageable page);

	List<Volunteer> findAllByIsActiveTrue();

}
