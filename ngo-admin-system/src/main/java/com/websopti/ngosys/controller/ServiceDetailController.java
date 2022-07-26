package com.websopti.ngosys.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.websopti.ngosys.dto.ServiceDetailDto;
import com.websopti.ngosys.dto.ServiceDetailListDTO;
import com.websopti.ngosys.dto.ServiceDetailPageableResponse;
import com.websopti.ngosys.entity.ServiceDetail;
import com.websopti.ngosys.service.ServiceDetailService;

@RestController
@RequestMapping("/api/serviceDetail")
@CrossOrigin
public class ServiceDetailController {

	@Autowired
	private ServiceDetailService serviceDetailService;
	
	@PostMapping("/save")
	public ServiceDetail save(@RequestBody ServiceDetailDto serviceDetailDto)
	{
		return serviceDetailService.save(serviceDetailDto);
	}

	@GetMapping("/get/all")
	public List<ServiceDetail> getAll()
	{
		return serviceDetailService.getAll();
		
	}
	
	@GetMapping("/get/{serviceDetailId}")
	public ServiceDetailDto get(@PathVariable Long serviceDetailId)
	{
		return serviceDetailService.get(serviceDetailId);
	}
	
	@DeleteMapping("/delete/{serviceDetailId}")
	public void deleteId(@PathVariable Long serviceDetailId)
	{
		serviceDetailService.deleteId(serviceDetailId);
	}
	
	@PostMapping("/get")
	public Page<ServiceDetailPageableResponse> getWithParams(@RequestBody ServiceDetailListDTO serviceDetailListDTO)
	{
		return serviceDetailService.getWithParams(serviceDetailListDTO);	
	}
	
	
	
	
	
}
