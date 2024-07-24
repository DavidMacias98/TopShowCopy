package com.topShow.eventos.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.topShow.eventos.model.evento;



public interface eventosRepo  extends JpaRepository<evento, Long>{
	
	 List<evento> findAllByOrderByFechaEventoAsc();
	 
	 

		List<evento> findByTipo(String tipo);
		
}
