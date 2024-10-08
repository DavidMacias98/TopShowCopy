import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CambiarContraComponent } from '../../index/cambiar-contra/cambiar-contra.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrls: ['./nav-admin.component.css']
})
export class NavAdminComponent {
  CurrentUser:any
  constructor(private router :Router,public dialog: MatDialog){
    this.CurrentUser = localStorage.getItem("sesion")
    this.CurrentUser = JSON.parse(this.CurrentUser)
  }

  goEvents(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigateByUrl("admin/events")
  }




  cerrarSesion(){
    localStorage.removeItem('sesion');
    Swal.fire(
      'Exito!',
      'Sesion cerrada!',
      'success'
    )
    localStorage.clear();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(["/portal"])
}


openModalCambiarContra(){
  const dialogRef =  this.dialog.open(CambiarContraComponent, { 
  //  data: {studentXassists: data},
    panelClass: 'custom-dialog-container', disableClose: true } );
}

}
