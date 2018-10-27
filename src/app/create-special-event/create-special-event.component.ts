import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EventService } from '../event.service';

@Component({
  selector: 'app-create-special-event',
  templateUrl: './create-special-event.component.html',
  styleUrls: ['./create-special-event.component.css']
})
export class CreateSpecialEventComponent implements OnInit {
  
  private imageSrc: string = '';

  specialEventData = {
    "name": '',
    "theme": '',
    "description": '',
    "image": '',
    "videoUrl": '',
    "date": ''
  }

  constructor(private _eventService: EventService, private _router: Router, private http: HttpClient) { }

  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e) {
    let reader = e.target;
    this.imageSrc = reader.result;
    this.specialEventData.image = this.imageSrc;
  }

  ngOnInit() {
  }

  createSpecialEvent() {
    this._eventService.createSpecialEvent(this.specialEventData)
      .subscribe(
        res => this._router.navigate(['/special']),
        err => console.log(err)
      )
  }

}
