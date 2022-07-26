package com.websopti.ngosys.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.websopti.ngosys.dto.ServiceDetailPageableResponse;
import com.websopti.ngosys.entity.ServiceDetail;


@Repository
public interface ServiceDetailRepository extends JpaRepository<ServiceDetail, Long>{

	@Query(value="SELECT s.id as id,s.name as name,s.address as address,"
			+ "s.contact_number as contactNumber,s.aadharcard_no as aadharcardNo,s.servicetype as servicetype"
			+ " FROM service_detail as s"
			+ " WHERE ?1 IS NULL OR LOWER(s.name) LIKE LOWER(concat('%', ?1, '%'))",nativeQuery = true)
	Page<ServiceDetailPageableResponse> findServiceDetailData(String searchStr, Pageable page);

	
}
