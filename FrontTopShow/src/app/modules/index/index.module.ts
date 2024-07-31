import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { ShowComponent } from './show/show.component';
import { NavComponent } from './nav/nav.component';
import { EventsComponent } from './events/events.component';
import { CambiarContraComponent } from './cambiar-contra/cambiar-contra.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';

import { MatButtonModule } from '@angular/material/button';
import { NavAdminComponent } from '../admin/nav-admin/nav-admin.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    ShowComponent,
    NavComponent,
    EventsComponent,
    CambiarContraComponent,
    FooterComponent,
    
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    MatFormFieldModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule
  ],exports:[
    FooterComponent
  ]
})
export class IndexModule { }
