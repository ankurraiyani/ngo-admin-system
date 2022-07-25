package com.websopti.ngosys.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.websopti.ngosys.dto.EventDto;
import com.websopti.ngosys.entity.ServiceType;
import com.websopti.ngosys.service.ServiceTypeService;

@RestController
@CrossOrigin
@RequestMapping("/api/servicetype")
public class ServiceTypeController {
	
	@Autowired
	private ServiceTypeService serviceTypeService;
	
	@PostMapping("/save")
	public ServiceType save(@RequestBody ServiceType serviceType) {
		return serviceTypeService.save(serviceType);
	}
	@GetMapping("/get/{serviceTypeId}")
	public ServiceType get(@PathVariable Long serviceTypeId) {
		return serviceTypeService.get(serviceTypeId).get();

	}
	@DeleteMapping("/deleteId/{serviceTypeId}")
	public void deleteId(@PathVariable Long serviceTypeId )
	{
		serviceTypeService.deleteId(serviceTypeId);
	}
	@GetMapping("/get/all")
	public List<ServiceType> getAll() {
		return serviceTypeService.getAll();
	}
	
}
