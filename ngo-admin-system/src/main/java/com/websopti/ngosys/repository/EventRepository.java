package com.websopti.ngosys.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.websopti.ngosys.dto.EventDto;
import com.websopti.ngosys.dto.EventPagabelReponse;
import com.websopti.ngosys.entity.Event;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {

	
	@Query(value="SELECT e.id as id ,e.name as name,e.start_date as startDate,e.end_date as endDate,e.address as address,e.city as city, "
			+ " e.type as type,e.description as description,e.sponsors as sponsors,e.volunteers as volunteers,e.contact_person as contactPerson,"
			+ " e.contact_number as contactNumber, e.contact_email as contactEmail"
			+ " FROM event e"
			+ " WHERE ?1 IS NULL OR LOWER(e.name) LIKE LOWER(concat('%', ?1, '%')) "
			+ " OR LOWER(e.city) LIKE LOWER(concat('%', ?1, '%'))",nativeQuery = true)
	Page<EventPagabelReponse> findEventData(String searchStr, Pageable page);


}
