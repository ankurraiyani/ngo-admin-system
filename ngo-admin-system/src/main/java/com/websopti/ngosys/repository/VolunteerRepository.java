package com.websopti.ngosys.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.websopti.ngosys.entity.Volunteer;

@Repository	
public interface VolunteerRepository extends JpaRepository<Volunteer,Long>{
		
}

