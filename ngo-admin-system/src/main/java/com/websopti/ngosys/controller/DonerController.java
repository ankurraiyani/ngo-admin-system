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
import org.springframework.web.bind.annotation.RestController;

import com.websopti.ngosys.dto.DonerListDTO;
import com.websopti.ngosys.entity.Doner;
import com.websopti.ngosys.service.DonerService;

@RestController
@RequestMapping("api/doner")
@CrossOrigin
public class DonerController {
	
	@Autowired
	private DonerService donerService;
		
	@PostMapping("/save")
	public Doner save(@RequestBody Doner doner)
	{
		return donerService.save(doner);
	}
	
	@GetMapping("/get/all")
	public List<Doner> getAllId()
	{
		return donerService.getAllId();
	}
	
	@GetMapping("/get/{donerId}")
	public Doner get(@PathVariable Long donerId)
	{
		return donerService.get(donerId).get();
	}
	
	@DeleteMapping("delete/{donerId}")
	public void deleteId(@PathVariable Long donerId)
	{
		 donerService.deleteId(donerId);
	}
	
	@PostMapping("/get")
	public Page<Doner> getWithParams(@RequestBody DonerListDTO donerListDto) {
		return donerService.getWithParams(donerListDto);
	}
	
}
