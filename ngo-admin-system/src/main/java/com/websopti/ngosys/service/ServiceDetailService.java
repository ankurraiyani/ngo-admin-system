package com.websopti.ngosys.service;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.websopti.ngosys.dto.ServiceDetailDto;
import com.websopti.ngosys.dto.ServiceDetailListDTO;
import com.websopti.ngosys.dto.ServiceDetailPageableResponse;
import com.websopti.ngosys.entity.ServiceDetail;
import com.websopti.ngosys.repository.ServiceDetailRepository;

@Service
public class ServiceDetailService {
	
	@Autowired
	private  ServiceDetailRepository serviceDetailRepository;
	
	
	public ServiceDetail save(ServiceDetailDto serviceDetailDto)
	{		
		ServiceDetail serviceDetail = this.convertDtoToEntity(serviceDetailDto);
		ServiceDetail serviceDetailNew = serviceDetailRepository.save(serviceDetail);
		return serviceDetailNew;
	}
	
	public List<ServiceDetail> getAll()
	{
		return serviceDetailRepository.findAll();
	}
	
	public ServiceDetail findById(Long serviceDetailId) {
		return serviceDetailRepository.findById(serviceDetailId).orElse(null);

	}
	
	public ServiceDetailDto get(Long serviceDetailId)
	{
		ServiceDetail serviceDetail = this.findById(serviceDetailId);
		ServiceDetailDto serviceDetailDto = this.convertEntityToDto(serviceDetail);
		return serviceDetailDto;
	}
	
	public void deleteId(Long serviceDetailId)
	{
		if(serviceDetailRepository.findById(serviceDetailId).isPresent())
		{
			serviceDetailRepository.deleteById(serviceDetailId);
		}
		else
		{
			System.out.println("Not Available");
		}
	}
	
	public Page<ServiceDetailPageableResponse> getWithParams(ServiceDetailListDTO serviceDetailListDTO)
	{
		Pageable page = PageRequest.of(serviceDetailListDTO.getPageNo(), serviceDetailListDTO.getPageSize(),Direction.DESC,"name");
		return serviceDetailRepository.findServiceDetailData(serviceDetailListDTO.getSearchStr(),page);
	}
	

	
	/*
	 *  Convert Dto To Entity
	 */
	
	private ServiceDetail convertDtoToEntity(ServiceDetailDto serviceDetailDto)
	{
		ServiceDetail serviceDetail = new ServiceDetail();
		BeanUtils.copyProperties(serviceDetailDto, serviceDetail);
		return serviceDetail;
	}


	/*
	 * Convert Entity To Dto
	 */
	
	private ServiceDetailDto convertEntityToDto(ServiceDetail serviceDetail)
	{
		ServiceDetailDto serviceDetailDto = new ServiceDetailDto();
		BeanUtils.copyProperties(serviceDetail, serviceDetailDto);
		return serviceDetailDto;
	}
	
	
	
	
}
