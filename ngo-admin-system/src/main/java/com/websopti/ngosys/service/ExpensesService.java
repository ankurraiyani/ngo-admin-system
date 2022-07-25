package com.websopti.ngosys.service;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.apache.tomcat.util.http.fileupload.FileUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.websopti.ngosys.dto.ExpensesDto;
import com.websopti.ngosys.dto.ExpensesListDTO;
import com.websopti.ngosys.dto.ExpensesPageableResponse;
import com.websopti.ngosys.entity.Expenses;
import com.websopti.ngosys.repository.ExpensesRepository;

@Service
public class ExpensesService {
	
	
	@Autowired
	private ExpensesRepository expensesRepository; 
	
	
	
	public Expenses save(ExpensesDto expensesDto)
	{
		Expenses expenses=this.convertDtoToEntity(expensesDto);
		Expenses expensesNew=expensesRepository.save(expenses);
		
//		if(expensesDto.getIsImageUpload())
//		{
//			System.out.println("image work.....");
//			System.out.println(expensesDto.getImageInPut());
//			this.saveBillImage(expensesDto.getImageInPut(),String.valueOf(expensesNew.getId()));
//		}
		
		return expensesNew;
	}


	public List<Expenses> getAll() 
	{			
		return expensesRepository.findAll();
	}
	

	public ExpensesDto getId(Long expensesId) {
		
		
		Expenses expenses=this.findById(expensesId);
		ExpensesDto expensesDto=this.convertEntityToDto(expenses);
		
//		byte[] image = this.getBillImage(String.valueOf(expensesId));
//		expensesDto.setImageOutPut(image);
		return expensesDto;
	}
	
	
	
	public void deleteId(Long expensesId) {
		
		if(findById(expensesId)!=null)
		{
			expensesRepository.deleteById(expensesId);
		}
		else
		{
			System.out.println("ID NOT FOUND");
		}
		
		
	}

	
	public Expenses findById(Long id)
	{
		return expensesRepository.findById(id).orElse(null);
	}
	
	
	
	
	
	
	
	/*
	 * 
	 * CONVERT DTO TO ENTITY
	 */

	private Expenses convertDtoToEntity(ExpensesDto expensesDto)
	{
		Expenses expenses=new Expenses();
		
		BeanUtils.copyProperties(expensesDto, expenses);
		
		return expenses;
	}
	
	/*
	 * CONVERT ENTITY TO DTO
	 */
	private ExpensesDto convertEntityToDto(Expenses expenses)
	{
		ExpensesDto expensesDto=new ExpensesDto();
		
		BeanUtils.copyProperties(expenses, expensesDto);
		
		return expensesDto;
	}


	public Page<ExpensesPageableResponse> getWithParams(ExpensesListDTO expensesListDto) {
		
		Pageable page = PageRequest.of(expensesListDto.getPageNo(),expensesListDto.getPageSize(),Direction.DESC,"transaction_date");
		
		
		return expensesRepository.findExpensesData(expensesListDto.getSearchStr(),page);
	}

	
	 /* SAVE BILL IMAGE
	 * @param expensesId
	 * @return
	 */
	
//	public void saveBillImage(MultipartFile files,String expensesId)
//	{
//		try {
//			
//			String mediaFolder = "C://Users/15DA435TX/eclipse-workspace/new/ngo-admin-system/ngo-admin-system/Images/Expenses"+File.separator+expensesId;
//			FileUtils.deleteDirectory(Paths.get(mediaFolder).toFile());
//			Path root=Files.createDirectories(Paths.get(mediaFolder));
//			files.transferTo(new File(mediaFolder,files.getOriginalFilename()));			
//		}
//		catch(Exception e){			
//			System.out.println("Bill Image Store Error : " +e);
//			
//		}
//	}
	
	/*
	 * GET BILL IMAGE
	 * @param donerId
	 * @return
	 */
	
//	public byte[] getBillImage(String expensesId) {
//		try {
//			String mediaFolder = "C://Users/15DA435TX/eclipse-workspace/new/ngo-admin-system/ngo-admin-system/Images/Expenses" + File.separator + expensesId;
//			File file = new File(mediaFolder);
//			if (file.exists() && file.listFiles().length > 0)
//				return Files.readAllBytes(file.listFiles()[0].toPath());
//		} catch (Exception e) {
//			System.out.println("Bill image get  Error: ");
//		}
//		return null;
//	}
	


}












