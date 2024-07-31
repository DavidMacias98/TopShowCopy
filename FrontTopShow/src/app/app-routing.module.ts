import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowComponent } from './modules/index/show/show.component';
import { NavComponent } from './modules/index/nav/nav.component';
import { AdminloginComponent } from './modules/admin/adminlogin/adminlogin.component';

const routes: Routes = [


{
  path: '', // Ruta vacía, podría ser tu página de inicio
  loadChildren: () => import('./modules/index/index.module').then(m => m.IndexModule),
},


{
  path: 'portal', component: AdminloginComponent
},
{
  path: 'admin', // Ruta vacía, podría ser tu página de inicio
  loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
