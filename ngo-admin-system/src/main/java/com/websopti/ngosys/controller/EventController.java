package com.websopti.ngosys.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.websopti.ngosys.dto.EventListDTO;
import com.websopti.ngosys.entity.Event;
import com.websopti.ngosys.service.EventService;

@RestController
@CrossOrigin
@RequestMapping("/api/event")
@CrossOrigin
public class EventController {
	
	@Autowired
	private EventService eventService;

	@PostMapping("/save")
	public Event save(@RequestBody Event event) {
		return eventService.save(event);
	}
	
	@GetMapping("/get/{eventId}")
	public Event get(@PathVariable Long eventId) {		
		return eventService.get(eventId).get();
	}
	
	@GetMapping("/get/all")
	public List<Event> getAll() {
		return eventService.getAll();
	}
	
	@PostMapping("/get")
	public Page<Event> getWithParams(@RequestBody EventListDTO eventListDto) {
		return eventService.getWithParams(eventListDto);
	}
	
	
}
