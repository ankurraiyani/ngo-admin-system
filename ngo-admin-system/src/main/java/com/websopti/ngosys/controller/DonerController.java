package com.websopti.ngosys.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.websopti.ngosys.dto.DonerDto;
import com.websopti.ngosys.dto.DonerListDTO;
import com.websopti.ngosys.dto.DonerPageableResponse;
import com.websopti.ngosys.dto.EventDto;
import com.websopti.ngosys.entity.Doner;
import com.websopti.ngosys.entity.Employee;
import com.websopti.ngosys.entity.Event;
import com.websopti.ngosys.service.DonerService;

@RestController
@CrossOrigin
@RequestMapping("api/doner")
public class DonerController {

	@Autowired
	private DonerService donerService;

	@PostMapping("/save")
	public Doner save(@RequestBody DonerDto donerDto) {
		return donerService.save(donerDto);
	}

	@GetMapping("/getAll/active")
	public List<Doner> getAllActive() {
		return donerService.getAllActive();
	}

	@GetMapping("/get/{donerId}")
	public DonerDto get(@PathVariable Long donerId) {
		return donerService.get(donerId);
	}

	@DeleteMapping("delete/{donerId}")
	public void deleteId(@PathVariable Long donerId) {
		donerService.deleteId(donerId);
	}

	@PostMapping("/get")
	public Page<DonerPageableResponse> getWithParams(@RequestBody DonerListDTO donerListDto) {
		return donerService.getWithParams(donerListDto);
	}

//	@PostMapping("/volunteerActiveDeactive")
//	public void volunteerActiveDeactive(@RequestParam(value = "volunteerId") Long volunteerId,
//			@RequestParam(value = "isActive") Boolean isActive) {
//		this.volunteerService.volunteerActiveDeactive(volunteerId, isActive);
//	}
	
	@PostMapping("/donerActiveDeactive")
	
	public void donerActiveDeactive(@RequestParam(value = "donerId") Long donerId,
			@RequestParam(value = "isPresent") Boolean isPresent) {
	this.donerService.donerActiveDeactive(donerId, isPresent);
	}
	
	
	
}
