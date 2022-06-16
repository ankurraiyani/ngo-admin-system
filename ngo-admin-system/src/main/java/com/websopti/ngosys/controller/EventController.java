package com.websopti.ngosys.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.websopti.ngosys.entity.Event;
import com.websopti.ngosys.service.EventService;

@RestController
public class EventController {
	
	@Autowired
	private EventService eventService;

	@PostMapping("/api/event/save")
	public Event save(@RequestBody Event event) {
		return eventService.save(event);
	}
	
	@GetMapping("/api/event/get/{eventId}")
	public Event get(@PathVariable Long eventId) {
		return eventService.get(eventId).get();
	}
	
	@GetMapping("/api/event/get/all")
	public List<Event> getAll() {
		return eventService.getAll();
	}
}
