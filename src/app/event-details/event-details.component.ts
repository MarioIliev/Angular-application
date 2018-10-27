import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EventService } from '../event.service';
import { Event } from '../event';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  public event = {};

  constructor(private _route: ActivatedRoute,
    private _eventService: EventService,
    private _location: Location) { }

  ngOnInit() {
    const id = this._route.snapshot.paramMap.get('_id');
    this._eventService.getEventById(id)
      .subscribe(
        res => this.event = res[+id - 1], 
        err => console.log(err)
      )
  }
  getBack() {
    this._location.back();
  }
}
