package com.websopti.ngosys.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.websopti.ngosys.dto.ServiceDetailPageableResponse;
import com.websopti.ngosys.entity.ServiceDetail;


@Repository
public interface ServiceDetailRepository extends JpaRepository<ServiceDetail, Long>{

//	Page<ServiceDetailPageableResponse> findServiceDetailData(String searchStr, Pageable page);

	
}
