import { HttpClient } from '@angular/common/http';
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
  selectedFile: any


  constructor(private _formBuilder: FormBuilder, private services: EventServiceService, private http: HttpClient) { }
  firstFormGroup = this._formBuilder.group({
    nombreEvento: ['', Validators.required],
    artista: ['', Validators.required],
    fechaEvento: ['', Validators.required],
    lugarEvento: ['', Validators.required],
    tipo: ['', Validators.required],
    ciudad: ['', Validators.required],
    urlPortada: ['', Validators.required],
  });


  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }

  async upload() {
    const baseUrl = window.location.origin;
    console.log('URL base del servidor:', baseUrl);


    const formData = new FormData
    formData.append("file", this.selectedFile)

    const response = await this.services.upload(formData).toPromise();

    Swal.fire(
      'Exito!',
      'Archivo guardado!',
      'success'
    ).then(() => {
      console.log(response.menssagge)
      this.putEvento(response.menssagge)
    })
  }
       

  //if (this.selectedFile) {

  // const formData = new FormData
  // formData.append("file",this.selectedFile)
  //  this.services.upload(formData).subscribe(
  //    (data: any) => {
  //     Swal.fire(
  //        'Exito!',
  //        'Archivo guardado!',
  //        'success'
  //     ).then(() => {
  //        console.log(data.menssagge)
  //      return data.menssagge
  //})
  //   }
  //   );
  // }
//}

putEvento(ruta:any) {

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

  console.log("File cargado")
  let evento = {
    nombreEvento: this.firstFormGroup.get('nombreEvento')?.value,
    artista: this.firstFormGroup.get('artista')?.value,
    fechaEvento: this.firstFormGroup.get('fechaEvento')?.value,
    lugarEvento: this.firstFormGroup.get('lugarEvento')?.value,
    tipo: this.firstFormGroup.get('tipo')?.value,
    ciudad: this.firstFormGroup.get('ciudad')?.value,
    urlPortada: ruta


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
