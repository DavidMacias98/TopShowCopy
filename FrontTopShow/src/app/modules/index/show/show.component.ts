
import { Component } from '@angular/core';
import { EventServiceService } from 'src/app/services/event-service.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent {


  eventos:any
  constructor(private eventService:EventServiceService){
    this.getEvent()
  }



  getEvent() {

    this.eventService.getEvent().subscribe((data: any) => {
      this.eventos=data
      console.log(data);
    }
    );
  }
}
