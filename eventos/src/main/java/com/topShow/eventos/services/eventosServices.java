package com.topShow.eventos.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.topShow.eventos.model.evento;
import com.topShow.eventos.repo.eventosRepo;


@Service
public class eventosServices {

	@Autowired
	private eventosRepo repo;
	
	
	public List<evento> getAllEvento(){
		
		List<evento> response= new ArrayList<>();
		response= this.repo.findAllByOrderByFechaEventoAsc();
		return response;
		
	}	
	
    public List<evento> getbyTipo(){
		
		List<evento> response= new ArrayList<>();
		response= this.repo.findByTipo("evento");
		return response;
		
	}	
	
	
	
}
