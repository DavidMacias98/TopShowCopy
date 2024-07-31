package com.topShow.eventos.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.topShow.eventos.model.AdminUser;


public interface CuentaRepository extends JpaRepository<AdminUser, Long>{

	
	
	

	

	@Query("select u from AdminUser u where u.usser = :usser")
	AdminUser findByUsserAdmin(String usser);
	
	
}
