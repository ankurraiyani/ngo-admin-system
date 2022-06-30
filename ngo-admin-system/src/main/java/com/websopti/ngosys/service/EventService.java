package com.websopti.ngosys.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.websopti.ngosys.dto.EventListDTO;
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

	
	public void deleteEventById(Long EventId)
	{
		if(eventRepository.findById(EventId).isPresent())
		{
			eventRepository.deleteById(EventId);
		}
		else
		{
			System.out.println("Not Available");
		}
	}
	
	
	public Page<Event> getWithParams(EventListDTO eventListDto) {
		
		Pageable page = PageRequest.of(eventListDto.getPageNo(), eventListDto.getPageSize());
//		return eventRepository.findAll(page);
		
		return eventRepository.findEventData(eventListDto.getSearchStr(),page);
	}

	

	

	
		
	
}
