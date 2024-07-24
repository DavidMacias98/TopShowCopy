import { Component } from '@angular/core';
import { EventServiceService } from 'src/app/services/event-service.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {


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
