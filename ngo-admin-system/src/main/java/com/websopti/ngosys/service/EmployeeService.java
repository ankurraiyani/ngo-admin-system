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

import com.websopti.ngosys.dto.EmployeeDto;
import com.websopti.ngosys.dto.EmployeeListDTO;
import com.websopti.ngosys.dto.EmployeePagebleResponse;
import com.websopti.ngosys.entity.Doner;
import com.websopti.ngosys.entity.Employee;
import com.websopti.ngosys.repository.EmployeeRepository;

@Service
public class EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepository;

	public Employee save(EmployeeDto employeeDto) {
		Employee employee = this.convertDtoToEntity(employeeDto);
		Employee employeeNew = employeeRepository.save(employee);
		if (employeeDto.getIsImageUpload()) {
			this.saveEmployeeProfile(employeeDto.getImageInPut(), String.valueOf(employeeNew.getId()));
		}
		return employeeNew;
	}

	public List<Employee> getAllActive() {
		return employeeRepository.findAllByIsActiveTrue();
	}

	public EmployeeDto get(Long employeeId) {
		Employee employee = this.findBydId(employeeId);
		EmployeeDto employeedto = this.convertEntityToDto(employee);

		byte[] image = this.getEmployeeProfile(String.valueOf(employeeId));
		employeedto.setImageOutPut(image);
		return employeedto;

	}

	public Employee findBydId(Long id) {
		return employeeRepository.findById(id).orElse(null);
	}

	public void deleteId(Long employeeId) {
//		optional<Employee> i= emplyeeRepository.findById(employeeId)
		if (findBydId(employeeId) != null) {
			employeeRepository.deleteById(employeeId);
		} else {
			System.out.println("Not Available");
		}
	}

	public Page<EmployeePagebleResponse> getWithParams(EmployeeListDTO employeeListDto) {

		Pageable page = PageRequest.of(employeeListDto.getPageNo(), employeeListDto.getPageSize(), Direction.DESC,
				"joining_date");
	
		return employeeRepository.findEmployeeData(employeeListDto.getSearchStr(), page);
	}

	public void employeeActiveDeactive(Long employeeId, Boolean isActive) {
		Employee employee = findBydId(employeeId);
		if (employee != null) {
			employee.setIsActive(isActive);
			employeeRepository.save(employee);
		} else {
			System.out.println("Employee not fount at active deactive time");
		}

	}

	private Employee convertDtoToEntity(EmployeeDto employeeDto) {
		Employee employee = new Employee();

		BeanUtils.copyProperties(employeeDto, employee);
		return employee;
	}

	private EmployeeDto convertEntityToDto(Employee employee) {

		EmployeeDto employeeDto = new EmployeeDto();
		BeanUtils.copyProperties(employee, employeeDto);
		return employeeDto;
	}

	public void saveEmployeeProfile(MultipartFile files, String userID) {
		try {
			String mediaFolder = "C://Users/MITESH/eclipse-workspace/ngo-admin-system/ngo-admin-system/Images/Employee"
					+ File.separator + userID;
			FileUtils.deleteDirectory(Paths.get(mediaFolder).toFile());
			Path root = Files.createDirectories(Paths.get(mediaFolder));
			files.transferTo(new File(mediaFolder, files.getOriginalFilename()));
		} catch (Exception e) {
			System.out.println("Employee Images store error" + e);
		}
	}

	/**
	 * get image
	 * 
	 * @param userId
	 * @return
	 */
	public byte[] getEmployeeProfile(String userId) {
		try {
			String mediaFolder = "C://Users/MITESH/eclipse-workspace/ngo-admin-system/ngo-admin-system/Images/Employee"
					+ File.separator + userId;
			File file = new File(mediaFolder);
			if (file.exists() && file.listFiles().length > 0)
				return Files.readAllBytes(file.listFiles()[0].toPath());
		} catch (Exception e) {
			System.out.println("Employee image get  Error: ");
		}
		return null;
	}

}