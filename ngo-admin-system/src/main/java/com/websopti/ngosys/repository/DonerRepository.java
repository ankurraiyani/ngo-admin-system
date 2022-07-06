package com.websopti.ngosys.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.websopti.ngosys.dto.DonerDto;
import com.websopti.ngosys.dto.DonerPageableResponse;
import com.websopti.ngosys.entity.Doner;


@Repository
public interface DonerRepository extends JpaRepository<Doner, Long> {
	
	@Query(value="SELECT d.id as id,d.doner_name as donerName,d.contact_number as contactNumber,d.doner_email as donerEmail,"
			+ " d.date_of_donation as dateOfDonation,d.typeof_donation as typeofDonation,d.reason as reason, "
			+ " d.donation_description as donationDescription,d.is_Present as isPresent"
			+ " FROM doner d "
			+ "WHERE ?1 IS NULL OR LOWER(d.doner_name) LIKE LOWER(concat('%', ?1, '%')) "
			+ "OR LOWER(d.typeof_donation) LIKE LOWER(concat('%', ?1, '%'))",nativeQuery = true)
	Page<DonerPageableResponse> findDonerData(String searchStr, Pageable page);

	List<Doner> findByIsPresentTrue();

	

}
