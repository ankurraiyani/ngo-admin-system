package com.websopti.ngosys.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.websopti.ngosys.entity.Event;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {

	@Query(value="SELECT * FROM event"
			+ " WHERE ?1 IS NULL OR LOWER(name) LIKE LOWER(concat('%', ?1, '%')) "
			+ " OR LOWER(city) LIKE LOWER(concat('%', ?1, '%'))",nativeQuery = true)
	Page<Event> findEventData(String searchStr, Pageable page);

}
