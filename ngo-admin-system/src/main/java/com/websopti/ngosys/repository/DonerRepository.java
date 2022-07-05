package com.websopti.ngosys.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.websopti.ngosys.entity.Doner;

@Repository
public interface DonerRepository extends JpaRepository<Doner, Long> {
	
	@Query(value="SELECT * FROM doner "
			+ "WHERE ?1 IS NULL OR LOWER(doner_name) LIKE LOWER(concat('%', ?1, '%'))"
			+ "OR LOWER(typeof_donation) LIKE LOWER(concat('%', ?1, '%'))",nativeQuery = true)
	Page<Doner> findDonerData(String searchStr, Pageable page);

	List<Doner> findByIsPresentTrue();

}
