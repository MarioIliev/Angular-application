import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EventService } from '../event.service';

@Component({
  selector: 'app-special-events-detail',
  templateUrl: './special-events-detail.component.html',
  styleUrls: ['./special-events-detail.component.css']
})
export class SpecialEventsDetailComponent implements OnInit {

  specialEvent = {}

  constructor(private _route: ActivatedRoute,
    private _eventService: EventService,
    private _location: Location) { }

  ngOnInit() {
    const id = this._route.snapshot.paramMap.get('_id');
    this._eventService.getSpecialEventById(id)
      .subscribe(
        res => this.specialEvent = res,
        err => console.log(err)
      )
  }
  getBack() {
    this._location.back();
  }
}
