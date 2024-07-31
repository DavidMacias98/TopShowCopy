import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EventServiceService } from 'src/app/services/event-service.service';
import Swal from 'sweetalert2';

export interface Evento {
  nombreEvento: string;
  artista: string;
  fechaEvento: Date;
  lugarEvento: string;
  tipo: string;
  ciudad: string;
  urlPortada: string;
}


@Component({
  selector: 'app-crud-events',
  templateUrl: './crud-events.component.html',
  styleUrls: ['./crud-events.component.css']
})





export class CrudEventsComponent {


  constructor(private _formBuilder: FormBuilder, private services: EventServiceService) { }
  firstFormGroup = this._formBuilder.group({
    nombreEvento: ['', Validators.required],
    artista: ['', Validators.required],
    fechaEvento: ['', Validators.required],
    lugarEvento: ['', Validators.required],
    tipo: ['', Validators.required],
    ciudad: ['', Validators.required],
    urlPortada: ['', Validators.required],
  });

  putEvento() {

    if (!this.firstFormGroup.valid) {
      // Aquí manejas el envío de datos
      const formData = this.firstFormGroup.value;
      console.log(formData);
      Swal.fire(
        'Error!',
        'Validacion incorrecta!',
        'error'
      )
      return// Aquí podrías hacer un servicio para enviar `formData` al backend, por ejemplo
    }



    let evento = {
      nombreEvento: this.firstFormGroup.get('nombreEvento')?.value,
      artista: this.firstFormGroup.get('artista')?.value,
      fechaEvento: this.firstFormGroup.get('fechaEvento')?.value,
      lugarEvento: this.firstFormGroup.get('lugarEvento')?.value,
      tipo: this.firstFormGroup.get('tipo')?.value,
      ciudad: this.firstFormGroup.get('ciudad')?.value,
      urlPortada: this.firstFormGroup.get('urlPortada')?.value,

    }
    console.log(evento);

    this.services.putEvento(evento).subscribe((data: any) => {
      Swal.fire(
        'Exito!',
        'Evento ingresado con exito!',
        'success'
      ).then(() => {
        this.firstFormGroup.markAsUntouched();
        this.firstFormGroup.markAsPristine();
        this.firstFormGroup.reset();
        
      })

    }, (error: Error) => {
      Swal.fire({
        icon: 'error',
        title: "Ha ocurrido un error",
        text: error.message,
      }).then(() => {

      })
    }, () => { }
    );

  }



}
