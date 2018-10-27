import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {

  singleNews = {}

  constructor(private _route: ActivatedRoute,
    private _newsService: NewsService,
    private _location: Location) { }

  ngOnInit() {
    const id = this._route.snapshot.paramMap.get('_id');
    this._newsService.getNewsById(id)
      .subscribe(
        res => this.singleNews = res,
        err => console.log(err)
      )
  }
  getBack() {
    this._location.back();
  }
}
