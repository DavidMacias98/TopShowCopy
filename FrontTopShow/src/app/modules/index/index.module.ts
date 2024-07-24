import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { ShowComponent } from './show/show.component';
import { NavComponent } from './nav/nav.component';
import { EventsComponent } from './events/events.component';


@NgModule({
  declarations: [
    ShowComponent,
    NavComponent,
    EventsComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule
  ]
})
export class IndexModule { }
