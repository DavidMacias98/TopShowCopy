package com.topShow.eventos.controller;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.Files;
import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.topShow.eventos.model.evento;
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
	
	@PostMapping("put/event")
	public ResponseEntity<?> switchPass(@RequestBody evento evento) throws Exception {
		Object response;
		try {
			response = this.services.putEvento(evento);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		return ResponseEntity.ok().body(response);
	}
	
	@PostMapping("admin/logers")
	public ResponseEntity<?> login(@RequestParam String user, @RequestParam String pass) throws Exception {
		Object response;
		try {
			response = this.services.adminlogin(user, pass);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		return ResponseEntity.ok().body(response);
	}
	@PostMapping("public/cpass/webusers")
	public ResponseEntity<?> switchPass(@RequestParam Long id, @RequestParam String actual, @RequestParam String nueva, @RequestParam String repetir) throws Exception {
		String response;
		try {
			response = this.services.cambiarContrasena(id, actual,nueva,repetir);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		return ResponseEntity.ok().body(new Response(response));
	}
		
	@PostMapping("public/rpass/webusers")
	public ResponseEntity<?> recoveryPass(@RequestParam String id,  @RequestParam String nueva, @RequestParam String repetir) throws Exception {
		String response;
		try {
			response = this.services.recoveryPass(id,nueva,repetir);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(new BadResponse(e.getMessage()));
		}
		return ResponseEntity.ok().body(new Response(response));
	}
	
	
	 private static final String UPLOAD_DIR = "C:\\PROJECT\\Project Git\\REPOS\\TopShowCopy\\FrontTopShow\\src\\assets\\portadas\\";

	    @PostMapping("upload")
	    public ResponseEntity<String> uploadFile(@RequestParam MultipartFile file) {
	        if (file.isEmpty()) {
	            return ResponseEntity.badRequest().body("File is empty");
	        }
	        
	        try {
	            // Crear la ruta de destino
	            Path path = (Path) Paths.get(UPLOAD_DIR + file.getOriginalFilename());
	            // Guardar el archivo en el directorio especificado
	            Files.write(path, file.getBytes());

	            return ResponseEntity.ok("File uploaded successfully: " + file.getOriginalFilename());
	        } catch (IOException e) {
	            return ResponseEntity.status(500).body("Error uploading file: " + e.getMessage());
	        }
	    }
}
