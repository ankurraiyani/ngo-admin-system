package com.websopti.ngosys.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.websopti.ngosys.dto.EventDto;
import com.websopti.ngosys.dto.EventListDTO;
import com.websopti.ngosys.entity.Employee;
import com.websopti.ngosys.entity.Event;
import com.websopti.ngosys.repository.EventRepository;

@Service
public class EventService {

	@Autowired
	private EventRepository eventRepository;
	
	@Autowired
	private EmployeeService employeeService;
	
	public Event save(EventDto eventDto) {
		Event event = this.convertDtoToEntity(eventDto);
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
		
		Pageable page = PageRequest.of(eventListDto.getPageNo(), eventListDto.getPageSize(),Direction.DESC, "start_date");
//		return eventRepository.findAll(page);
		
		return eventRepository.findEventData(eventListDto.getSearchStr(),page);
	}

	private Event convertDtoToEntity(EventDto eventDto) {
		Event event = new Event();
		BeanUtils.copyProperties(eventDto, event);
		List<Employee> employeeList = new ArrayList<Employee>();
		for(Long employeeId : eventDto.getEmployeeIds()) 
		{
			Employee employee = this.employeeService.findBydId(employeeId);
			employeeList.add(employee);
		}
		event.setEmployeeList(employeeList);
		return event;
	}

	

	
		
	
}
