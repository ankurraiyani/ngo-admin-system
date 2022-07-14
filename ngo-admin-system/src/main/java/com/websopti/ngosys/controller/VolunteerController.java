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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.websopti.ngosys.dto.EventListDTO;
import com.websopti.ngosys.dto.VolunteerDto;
import com.websopti.ngosys.dto.VolunteerListDTO;
import com.websopti.ngosys.dto.VolunteerPageableResponse;
import com.websopti.ngosys.entity.Employee;
import com.websopti.ngosys.entity.Event;
import com.websopti.ngosys.entity.Volunteer;
import com.websopti.ngosys.service.VolunteerService;

@RestController
@RequestMapping("/api/volunteer")
@CrossOrigin
public class VolunteerController {

	@Autowired
	private VolunteerService volunteerService;

	@PostMapping("/save")
	public Volunteer save(@ModelAttribute VolunteerDto volunteerDto) {
		return volunteerService.save(volunteerDto);
	}

	@GetMapping("/getAll/active")
	public List<Volunteer> getAllActive() {
		return volunteerService.getAllActive();
	}

	@GetMapping("/get/{volunteerId}")
	public VolunteerDto get(@PathVariable Long volunteerId) {
		return volunteerService.get(volunteerId);
	}

	@GetMapping("/get/all")
	public List<Volunteer> getAll() {
		return volunteerService.getAll();
	}

	@PostMapping("/get")
	public Page<VolunteerPageableResponse> getWithParams(@RequestBody VolunteerListDTO volunteerListDto) {
		return volunteerService.getWithParams(volunteerListDto);
	}

	@DeleteMapping("/delete/{volunteerId}")
	public void deleteId(@PathVariable Long volunteerId) {
		volunteerService.deleteId(volunteerId);
	}

	@PostMapping("/volunteerActiveDeactive")
	public void volunteerActiveDeactive(@RequestParam(value = "volunteerId") Long volunteerId,
			@RequestParam(value = "isActive") Boolean isActive) {
		this.volunteerService.volunteerActiveDeactive(volunteerId, isActive);
	}

}
