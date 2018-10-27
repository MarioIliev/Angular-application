import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from './news';
import { DomainService } from './domain.service';

@Injectable()
export class NewsService {

  constructor(private _http: HttpClient, private _domainService: DomainService) { }
  
  private domainUrl = this._domainService.getDomainUrl();
  private _newsUrl = this.domainUrl + "api/news/";
  private _createNewsUrl = this.domainUrl + "api/create-news";
 
  getAllNews(){
    return this._http.get<any>(this._newsUrl);
  }

  getNewsById(id){
    return this._http.get<News>(this._newsUrl + id)
  }

  createNews(newsData) {
    console.log(this._createNewsUrl)
    return this._http.post<any>(this._createNewsUrl, newsData)
  }
}
