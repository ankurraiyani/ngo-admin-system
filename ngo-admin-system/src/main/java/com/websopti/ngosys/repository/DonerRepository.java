package com.websopti.ngosys.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.websopti.ngosys.entity.Doner;
import com.websopti.ngosys.entity.Event;

@Repository
public interface DonerRepository extends JpaRepository<Doner, Long> {

}
