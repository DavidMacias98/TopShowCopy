package com.topShow.eventos.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.topShow.eventos.model.AdminUser;
import com.topShow.eventos.model.evento;
import com.topShow.eventos.repo.CuentaRepository;
import com.topShow.eventos.repo.eventosRepo;


@Service
public class eventosServices {

	@Autowired
	private eventosRepo repo;
	@Autowired
	private CuentaRepository cuentaRepo;
	
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
    
    public evento putEvento(evento events) {
    	
    	
    	return this.repo.save(events);
    	
    }
    
    
	public Object adminlogin(String usser, String pass) throws Exception {

		AdminUser userLog = this.cuentaRepo.findByUsserAdmin(usser);
		if (userLog == null) {
			throw new Exception("Usuario: " + usser + " no existe");
		}
		if(userLog.getActivo()==false ) {
			throw new Exception("Usuario se encuentra desactivado");
		}
		if(!userLog.getPass().equals(pass)) {
			throw new Exception("Clave incorrecta ");
		}
	
		return userLog;
	}
	
	public String cambiarContrasena(Long id, String actual, String nueva, String repetir) throws Exception {
		AdminUser usser=null;
		String response;
		usser =  cuentaRepo.findById(id).get();
		if(!usser.getPass().equals(actual)) {
			throw new Exception("Contraseña actual no coincide");
		}
		if(!nueva.equals(repetir)) {
			throw new Exception("Contraseña nueva no coincide");
		}
		
		usser.setPass(nueva);
		this.cuentaRepo.save(usser);
		return "Contraseña cambiada";
	}
	
	public String recoveryPass(String id,  String nueva, String repetir) throws Exception {
		AdminUser usser=null;
		String response;
		usser =  cuentaRepo.findByUsserAdmin(id);
		
		if(usser==null) {
			throw new Exception("Usuario no existe");
		
		}	
			
		if(!nueva.equals(repetir)) {
			throw new Exception("Contraseña nueva no coincide");
		}
		
		usser.setPass(nueva);
		this.cuentaRepo.save(usser);
		return "Contraseña cambiada";
	}
	
}
