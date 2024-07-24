import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ShowComponent } from './show/show.component';
import { EventsComponent } from './events/events.component';

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
