package com.websopti.ngosys.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.websopti.ngosys.entity.Event;
import com.websopti.ngosys.entity.ServiceType;


public interface ServiceTypeRepository extends JpaRepository<ServiceType, Long> {


}
