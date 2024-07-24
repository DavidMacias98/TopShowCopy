package com.topShow.eventos.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.topShow.eventos.services.eventosServices;
@RestController
@RequestMapping("${route.service.contextPath}")
public class EventoController {

	
	@Autowired
	private eventosServices services;
	
	@GetMapping("get/event")
	public ResponseEntity<?> getEvent() throws Exception {
		Object response;
		try {
			response = this.services.getAllEvento();
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		return ResponseEntity.ok().body(response);
	}
	
	
	@GetMapping("get/event/tipo")
	public ResponseEntity<?> getEventByTipo() throws Exception {
		Object response;
		try {
			response = this.services.getbyTipo();
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		return ResponseEntity.ok().body(response);
	}
	
}
