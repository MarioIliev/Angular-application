import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomainService } from './domain.service';

@Injectable()
export class EventService {
  
  constructor(private _http: HttpClient, private _domainService: DomainService) { }

  private _domainUrl = this._domainService.getDomainUrl();
  private _eventsUrl =  this._domainUrl + "api/events";
  private _specialEventsUrl = this._domainUrl + "api/special/";
  private _createSpecialEventUrl = this._domainUrl + "api/create-special-event"
  
  /* Events */
  getEvents() {
    return this._http.get<any>(this._eventsUrl)
  }

  getEventById(id) {
    return this._http.get<any>(this._eventsUrl);
  }
  
  /* Special Events */
  getSpecialEvents() {
    return this._http.get<any>(this._specialEventsUrl)
  }

  getSpecialEventById(id) {
    return this._http.get<any>(this._specialEventsUrl + id);
  }

  createSpecialEvent(specialEvent) {
    console.log(this._createSpecialEventUrl)
    return this._http.post<any>(this._createSpecialEventUrl, specialEvent)
  }
}
