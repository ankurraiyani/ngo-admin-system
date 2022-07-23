package com.websopti.ngosys.service;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;

import org.apache.tomcat.util.http.fileupload.FileUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.websopti.ngosys.dto.VolunteerDto;
import com.websopti.ngosys.dto.VolunteerListDTO;
import com.websopti.ngosys.dto.VolunteerPageableResponse;
import com.websopti.ngosys.entity.Volunteer;
import com.websopti.ngosys.repository.VolunteerRepository;

@Service
public class VolunteerService {

	@Autowired
	private VolunteerRepository volunteerRepository;

	public Volunteer save(VolunteerDto volunteerDto) {
		Volunteer volunteer = this.convertDtoToEntity(volunteerDto);
		Volunteer volunteerNew = volunteerRepository.save(volunteer);
		if (volunteerDto.getIsImageUpload()) {
			this.saveVolunteerProfile(volunteerDto.getImageInPut(), String.valueOf(volunteerNew.getId()));
		}
		return volunteerNew;
	}

	public VolunteerDto get(Long volunteerId) {
		Volunteer volunteer = this.findById(volunteerId);
		VolunteerDto volunteerDto = this.convertEntityToDto(volunteer);

		byte[] image = this.getVolunteerProfile(String.valueOf(volunteerId));
		volunteerDto.setImageOutPut(image);
		return volunteerDto;
	}

	public List<Volunteer> getAll() {
		return volunteerRepository.findAll();
	}

	public Page<VolunteerPageableResponse> getWithParams(VolunteerListDTO volunteerListDto) {

		Pageable page = PageRequest.of(volunteerListDto.getPageNo(), volunteerListDto.getPageSize(), Direction.DESC,
				"date_of_joining");
//		return volunteerRepository.findAll(page);
		return volunteerRepository.findVolunteerData(volunteerListDto.getSearchStr(), page);
	}

	public void deleteId(Long volunteerId) {

		if (volunteerRepository.findById(volunteerId).isPresent()) {
			volunteerRepository.deleteById(volunteerId);
		} else {
			System.out.println("Not Available");
		}

	}

	public void volunteerActiveDeactive(Long volunteerId, Boolean isActive) {
		Volunteer volunteer = volunteerRepository.findById(volunteerId).orElse(null);
		if (volunteer != null) {
			volunteer.setIsActive(isActive);
			volunteerRepository.save(volunteer);
		} else {
			System.out.println("Volunteer not fount at active deactive time");
		}
	}

	public List<Volunteer> getAllActive() {
		return volunteerRepository.findAllByIsActiveTrue();
	}

	public Volunteer findById(Long volunteerId) {
		return volunteerRepository.findById(volunteerId).orElse(null);

	}

	/*
	 * Convert Dto to Entity
	 */
	private Volunteer convertDtoToEntity(VolunteerDto volunteerDto) {
		Volunteer volunteer = new Volunteer();

		BeanUtils.copyProperties(volunteerDto, volunteer);
		return volunteer;

	}

	/*
	 * Convert Entity To Dto
	 */
	private VolunteerDto convertEntityToDto(Volunteer volunteer) {
		VolunteerDto volunteerDto = new VolunteerDto();

		BeanUtils.copyProperties(volunteer, volunteerDto);

		return volunteerDto;
	}

	public void saveVolunteerProfile(MultipartFile files, String userId) {
		try {
			String mediaFolder = "C:/Users/Admin/eclipse-workspace/ngo-admin-system/ngo-admin-system/Images/Volunteer"
					+ File.separator + userId;
			FileUtils.deleteDirectory(Paths.get(mediaFolder).toFile());
			Path root = Files.createDirectories(Paths.get(mediaFolder));
			files.transferTo(new File(mediaFolder, files.getOriginalFilename()));
		} catch (Exception e) {
			System.out.println("Volunteer image store  Error: " + e);
		}
	}

	/**
	 * get image
	 * 
	 * @param userId
	 * @return
	 */
	public byte[] getVolunteerProfile(String userId) {
		try {
			String mediaFolder = "C:/Users/Admin/eclipse-workspace/ngo-admin-system/ngo-admin-system/Images/Volunteer"
					+ File.separator + userId;
			File file = new File(mediaFolder);
			if (file.exists() && file.listFiles().length > 0)
				return Files.readAllBytes(file.listFiles()[0].toPath());
		} catch (Exception e) {
			System.out.println("Volunteer image get  Error: ");
		}
		return null;
	}
}
