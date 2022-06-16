package com.websopti.ngosys.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.websopti.ngosys.entity.Event;
import com.websopti.ngosys.repository.EventRepository;

@Service
public class EventService {

	@Autowired
	private EventRepository eventRepository;
	
	public Event save(Event event) {
		return eventRepository.save(event);
	}

	public Optional<Event> get(Long eventId) {
		return eventRepository.findById(eventId);
	}

	public List<Event> getAll() {
		return eventRepository.findAll();
	}
}
