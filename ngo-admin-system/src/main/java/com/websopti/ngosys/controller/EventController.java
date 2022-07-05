package com.websopti.ngosys.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.websopti.ngosys.dto.EventDto;
import com.websopti.ngosys.dto.EventListDTO;
<<<<<<< HEAD
import com.websopti.ngosys.entity.Employee;
=======
import com.websopti.ngosys.entity.Doner;
>>>>>>> f7c4e83e3f86e269ae2f5b585b66bc610ebee5a9
import com.websopti.ngosys.entity.Event;
import com.websopti.ngosys.service.EventService;


@RestController
@CrossOrigin
@RequestMapping("/api/event")
public class EventController {
	
	@Autowired
	private EventService eventService;  

	@PostMapping("/save")
	public Event save(@RequestBody EventDto eventDto) {
		return eventService.save(eventDto);
	}
	
	@GetMapping("/get/{eventId}")

	public Optional<Event> get(@RequestBody Long id) {		
		return eventService.get(id);
		
	}
	
	@GetMapping("/get/all")
	public List<Event> getAll() {
		return eventService.getAll();
	}
	
	@DeleteMapping("delete/{eventId}")
	public void deleteId(@PathVariable Long eventId)
	{
		 eventService.deleteEventById(eventId);
	}
	
	@PostMapping("/get")
	public Page<Event> getWithParams(@RequestBody EventListDTO eventListDto) {
		return eventService.getWithParams(eventListDto);
	}
	
	
	
}
