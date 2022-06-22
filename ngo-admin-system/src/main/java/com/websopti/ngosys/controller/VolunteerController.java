package com.websopti.ngosys.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.websopti.ngosys.dto.EventListDTO;
import com.websopti.ngosys.dto.VolunteerListDTO;
import com.websopti.ngosys.entity.Event;
import com.websopti.ngosys.entity.Volunteer;
import com.websopti.ngosys.service.VolunteerService;


@RestController
@RequestMapping("/api/volunteer")
public class VolunteerController {
	
	@Autowired
	private VolunteerService volunteerService;
	
	@PostMapping("/save")
	public Volunteer save(@RequestBody Volunteer volunteer)
	{
		return volunteerService.save(volunteer);
	}
	
	@GetMapping("/get/{volunteerId}")
	public Volunteer get(@PathVariable Long volunteerId)
	{
		return volunteerService.get(volunteerId).get();
	}
	
	@GetMapping("/get/all")
	public List<Volunteer> getAll() {
		return volunteerService.getAll();
	}
	
	@PostMapping("/get")
	public Page<Volunteer> getWithParams(@RequestBody VolunteerListDTO volunteerListDto) {
		return volunteerService.getWithParams(volunteerListDto);
	}
	
	@DeleteMapping("/delete/{volunteerId}")
	public void deleteId(@PathVariable Long volunteerId)
	{
		volunteerService.deleteId(volunteerId);
	}
	
	

}
