import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.css']
})
export class CreateNewsComponent implements OnInit {

  private imageSrc: string = '';

  createdNewsData = {
    "title": '',
    "description": '',
    "description1": '',
    "image": '',
    "videoUrl": '',
    "author": '',
    "date": '',
  }

  constructor(private _newsService: NewsService, private _router: Router, private http: HttpClient) { }

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
    this.createdNewsData.image = this.imageSrc;
  }

  ngOnInit() {
  }

  createNews() {
    this._newsService.createNews(this.createdNewsData)
      .subscribe(
        res => this._router.navigate(['/news']),
        err => console.log(err)
      )
  }
}
