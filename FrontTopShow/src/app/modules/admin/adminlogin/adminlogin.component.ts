import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventServiceService } from 'src/app/services/event-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

  constructor(
    private eventService: EventServiceService
    , private router: Router
  ) { }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  login(user: any, pass: any) {
    let session: any;
    const logs = new FormData();
    logs.append("user", user)
    logs.append("pass", pass)
    this.eventService.login(logs).subscribe((data: any) => {
      session = data;
      Swal.fire(
        'Exito!',
        'bienvenido!',
        'success'
      ).then((result) => {
        if (result.isConfirmed) {
          localStorage.setItem("sesion", JSON.stringify(session))
          if (session.rol == 'admin') {
            this.router.navigate(['/admin'])
          } 
        }
      }
      )
    }, (error: any) => {
      Swal.fire(
        'Error!',
        error.message,
        'error'
      )
    }
    )
  }

}
