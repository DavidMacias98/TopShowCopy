import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ShowComponent } from './show/show.component';
import { EventsComponent } from './events/events.component';
import { AdminloginComponent } from '../admin/adminlogin/adminlogin.component';
import { NavAdminComponent } from '../admin/nav-admin/nav-admin.component';
import { CrudEventsComponent } from '../admin/crud-events/crud-events.component';

const routes: Routes = [


  {
    path: '', component: NavComponent ,
    children: [
      {
        path: '', component: ShowComponent
      },
      
      {
        path: 'eventos', component: EventsComponent
      },
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
