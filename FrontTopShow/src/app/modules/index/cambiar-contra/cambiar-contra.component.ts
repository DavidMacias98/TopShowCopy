import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EventServiceService } from 'src/app/services/event-service.service';
import Swal from 'sweetalert2';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-cambiar-contra',
  templateUrl: './cambiar-contra.component.html',
  styleUrls: ['./cambiar-contra.component.css'],
})
export class CambiarContraComponent {
  sesion: any
  constructor(
    private publicService: EventServiceService
    , private router: Router
    ,public dialogRef: MatDialogRef<CambiarContraComponent>
  ) {
    this.sesion= localStorage.getItem("sesion")
    if (this.sesion!!) {
      this.sesion = JSON.parse(this.sesion)
    }

  }

  cambiar(act: any, nuev: any, rept: any) {


    const logs = new FormData();
    logs.append("id", this.sesion.id)
    logs.append("actual", act)
    logs.append("nueva", nuev)
    logs.append("repetir", rept)
    this.publicService.cambiarContra(logs).subscribe((data: any) => {
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
      }).then(() => {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(["/"])
      })
    }, () => { }
    );
  }



  cerrarModal(){
    this.dialogRef.close()  
  }

}
