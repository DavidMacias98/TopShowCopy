package com.topShow.eventos.model;

import java.io.Serializable;
import java.math.BigDecimal;



import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "admin_user")
@JsonIgnoreProperties(  value = {"pass"}, allowGetters = false, allowSetters = true)
public class AdminUser implements Serializable {
	

	
	
	private static final long serialVersionUID = 1L;


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column
	private String document;
	@Column
	private String name;
	
	@Column
	private String ape;
	
	@Column
	private String whatsapp;
	
	@Column
	private String usser;
	
	@Column
	private String pass;
	
	@Column
	private String imgPerfi;
		
	@Column
	private String rol;
	
	@Column
	private Boolean activo;
}
