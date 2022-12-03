import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/_services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  constructor(private service:EventService){ }

  ngOnInit(): void {
    this.service.getEvents().subscribe(o => this.events = o)
  }

  events?:Event[]

}