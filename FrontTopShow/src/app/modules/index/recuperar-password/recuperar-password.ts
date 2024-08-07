import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EventServiceService } from 'src/app/services/event-service.service';
import Swal from 'sweetalert2';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.html',
  styleUrls: ['./recuperar-password.css'],
})
export class RecuperarPassword {
  sesion: any
  constructor(
    private publicService: EventServiceService
    , private router: Router
    ,public dialogRef: MatDialogRef<RecuperarPassword>
  ) {
    this.sesion= localStorage.getItem("sesion")
    if (this.sesion!!) {
      this.sesion = JSON.parse(this.sesion)
    }

  }

  cambiar( user:any ,nuev: any, rept: any) {


    const logs = new FormData();
    logs.append("id", user)
    logs.append("nueva", nuev)
    logs.append("repetir", rept)
    this.publicService.recuperarPass(logs).subscribe((data: any) => {
      Swal.fire(
        'Exito!',
        'contraseña cambiada!',
        'success'
      ).then(() => {
      })
      console.log(data)

    }, (error: Error) => {
      Swal.fire({
        icon: 'error',
        title: "Ha ocurrido un error",
        text: error.message,
      })
    }, () => { }
    );
  }



  cerrarModal(){
    this.dialogRef.close()  
  }

}
