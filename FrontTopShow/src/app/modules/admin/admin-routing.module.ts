import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CrudEventsComponent } from './crud-events/crud-events.component';

const routes: Routes = [

  {
    path: '', 
    component: DashboardComponent,
    children: [
      {
        path: 'events', component: CrudEventsComponent
      },
    ]
    }




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
