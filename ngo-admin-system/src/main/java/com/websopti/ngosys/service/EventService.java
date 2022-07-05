package com.websopti.ngosys.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.management.loading.PrivateClassLoader;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.websopti.ngosys.dto.EventDto;
import com.websopti.ngosys.dto.EventListDTO;
import com.websopti.ngosys.entity.Doner;
import com.websopti.ngosys.entity.Employee;
import com.websopti.ngosys.entity.Event;
import com.websopti.ngosys.entity.Volunteer;
import com.websopti.ngosys.repository.EventRepository;

@Service
public class EventService {

	@Autowired
	private EventRepository eventRepository;
	
	@Autowired
	private EmployeeService employeeService;
	
	@Autowired
	private DonerService donerService;
	
	@Autowired
	private VolunteerService volunteerService;
	
	
	public Event save(EventDto eventDto) {
		Event event = this.convertDtoToEntity(eventDto);
		return eventRepository.save(event);
	}


	
	
	public EventDto get(Long eventId)
	{
		Event event = eventRepository.findById(eventId).orElse(null);
		EventDto eventDto=this.convertEntityToDto(event);
		return eventDto;
	}
	
	
//	
//	public List<Employee> get() {
//		List<Employee> employeeList=this.convertEntityToDto();
//		
//		System.out.println(employeeList);
//		return employeeList;
//	}

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

		//employee
		if(eventDto.getEmployeeIds() != null && eventDto.getEmployeeIds().size() > 0) {
			
			List<Employee> employeeList = new ArrayList<Employee>();
			for(Long employeeId : eventDto.getEmployeeIds()) {
				Employee employee = this.employeeService.findBydId(employeeId);
				employeeList.add(employee);
			}
			event.setEmployeeList(employeeList);
		}
		
		//donner
		if(eventDto.getDonerIds() != null && eventDto.getDonerIds().size() > 0) {
			List<Doner> donerList = new ArrayList<Doner>();
			for(Long donerId : eventDto.getDonerIds()) {
				Doner doner = this.donerService.findBydId(donerId);
				donerList.add(doner);
			}
			event.setDonerList(donerList);
		}
		
		//Volunteer
		if(eventDto.getVolunteerIds() != null && eventDto.getVolunteerIds().size() > 0) {
			List<Volunteer> volunteerList = new ArrayList<Volunteer>();
			for(Long volunteerId : eventDto.getVolunteerIds()) {
				Volunteer volunteer = this.volunteerService.findById(volunteerId);
				volunteerList.add(volunteer);
			}
			event.setVolunteerList(volunteerList);
		}
		
		return event;
	}
	
	
	private EventDto convertEntityToDto(Event event) {
		EventDto eventDto = new EventDto();
		BeanUtils.copyProperties(event, eventDto);
		
		//employee
		if(event.getEmployeeList() != null && event.getEmployeeList().size() > 0) {
			List<Long> employeeIds = new ArrayList<Long>();
			
			for(Employee employee:event.getEmployeeList()) {
				employeeIds.add(employee.getId());
			}
			eventDto.setEmployeeIds(employeeIds);
		}
		
		//volunteer
		if(event.getVolunteerList() != null && event.getVolunteerList().size() > 0) {
			List<Long> volunteerIds = new ArrayList<Long>();
			
			for(Volunteer volunteer:event.getVolunteerList()) {
				volunteerIds.add(volunteer.getId());
			}
			eventDto.setVolunteerIds(volunteerIds);
		}
		
		return eventDto;
	}
	
}
