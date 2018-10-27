import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newses = [];

  constructor(private _newsService: NewsService, private _router: Router) { }

  ngOnInit() {
    this._newsService.getAllNews()
      .subscribe(
        res => this.newses = res.reverse() ,
        err => console.log(err)
      )
  }

  onSelect(news) {
    this._router.navigate(['/news', news._id]);
  }
}
