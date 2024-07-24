package com.topShow.eventos.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "evento", schema = "public")
public class evento {

		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
		@Column
	private String nombreEvento;
		@Column
	private String Artista;
		@Column
	private LocalDate fechaEvento;
		@Column
	private String urlPortada;
	
		@Column
	private String lugarEvento;
		
		@Column
	private String tipo;
		
		@Column
	private String ciudad;
		
	
	

	
}
