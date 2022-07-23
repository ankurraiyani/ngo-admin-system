package com.websopti.ngosys.service;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

import org.apache.tomcat.util.http.fileupload.FileUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.websopti.ngosys.dto.DonerDto;
import com.websopti.ngosys.dto.DonerListDTO;
import com.websopti.ngosys.dto.DonerPageableResponse;
import com.websopti.ngosys.entity.Doner;
import com.websopti.ngosys.entity.Volunteer;
import com.websopti.ngosys.repository.DonerRepository;

@Service
public class DonerService {

	@Autowired
	private DonerRepository donerRepository;

	// save
	public Doner save(DonerDto donerDto) {
		Doner doner = this.convertDtoToEntity(donerDto);
		Doner donerNew=donerRepository.save(doner);
		if(donerDto.getIsImageUpload())
		{
			System.out.println("image work.....");
			System.out.println(donerDto.getImageInPut());
			this.saveDonerProfile(donerDto.getImageInPut(),String.valueOf(donerNew.getId()));
		}
		return donerNew;
	}

	// GetByid
	public DonerDto get(Long donerId) {
		Doner doner = this.findById(donerId);
		DonerDto donerDto = this.convertEntityToDto(doner);

		byte[] image = this.getDonerProfile(String.valueOf(donerId));
		donerDto.setImageOutPut(image);
		return donerDto;
	}

	// GetAllId
	public List<Doner> getAllId() {
		return donerRepository.findAll();
	}

	// Remove
	public void deleteId(Long donerId) {
		if (findById(donerId) != null) {

			donerRepository.deleteById(donerId);
		} else {
			System.out.println("Not Available");

		}
	}

	public Page<DonerPageableResponse> getWithParams(DonerListDTO donerListDto) {
		Pageable page = PageRequest.of(donerListDto.getPageNo(), donerListDto.getPageSize(), Direction.DESC,
				"date_of_donation");
		// return donerRepository.findAll(page);

		return donerRepository.findDonerData(donerListDto.getSearchStr(), page);
	}

	public Doner findById(Long donerId) {
		return donerRepository.findById(donerId).orElse(null);

	}

	public List<Doner> getAllActive() {
		return donerRepository.findByIsPresentTrue();
	}

	/*
	 * Convert Dto to Entity
	 * 
	 */

	private Doner convertDtoToEntity(DonerDto donerDto) {
		Doner doner = new Doner();

		BeanUtils.copyProperties(donerDto, doner);

		return doner;
	}

	public void donerActiveDeactive(Long donerId, Boolean isPresent) {
		Doner doner = this.findById(donerId);
		if (doner != null) {
			doner.setIsPresent(isPresent);
			donerRepository.save(doner);
		} else {
			System.out.println("Doner not found at active deactive time");
		}

	}

	/*
	 * Covert Entity To Dto
	 * 
	 */

	private DonerDto convertEntityToDto(Doner doner) {
		DonerDto donerDto = new DonerDto();

		BeanUtils.copyProperties(doner, donerDto);

		return donerDto;
	}
	
	/*
	 * saveDonerProfile
	 * @param donerId
	 * @return
	 */
	
	public void saveDonerProfile(MultipartFile files,String donerId)
	{
		try {
			
			String mediaFolder = "C:/Users/Admin/eclipse-workspace/ngo-admin-system/ngo-admin-system/Images/Doner"+File.separator+donerId;
			FileUtils.deleteDirectory(Paths.get(mediaFolder).toFile());
			Path root=Files.createDirectories(Paths.get(mediaFolder));
			files.transferTo(new File(mediaFolder,files.getOriginalFilename()));			
		}
		catch(Exception e){			
			System.out.println("Doner Image Store Error : " +e);
			
		}
	}
	
	/**
	 * get Doner Image
	 * @param donerId
	 * @return
	 */
	
	public byte[] getDonerProfile(String donerId) {
		try {
			String mediaFolder = "C:/Users/Admin/eclipse-workspace/ngo-admin-system/ngo-admin-system/Images/Doner" + File.separator + donerId;
			File file = new File(mediaFolder);
			if (file.exists() && file.listFiles().length > 0)
				return Files.readAllBytes(file.listFiles()[0].toPath());
		} catch (Exception e) {
			System.out.println("Doner image get  Error: ");
		}
		return null;
	}
	


}
