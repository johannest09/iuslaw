import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import { Post } from './post';

@Injectable()
export class PostsService {

  private _wpBase = environment.apiBaseUrl + "wp-json/wp/v2/";

  constructor(private http: Http) { }

  getPosts(lang:string, limit:number): Observable<Post[]> {

    var query = "";
    var currLang = lang == "en" ? "news_english" : "news_icelandic";

    if(limit && limit > 0) {
      query = this._wpBase + 'posts?filter[category_name]=' + currLang + '&per_page=' + limit;
    } else {
      query = this._wpBase + 'posts?filter[category_name]=' + currLang + '';
    }

    return this.http
      .get(query)
      .map((res: Response) => res.json());

  }

  getPost(slug): Observable<Post> {
    
    return this.http
      .get(this._wpBase + `posts?slug=${slug}`)
      .map((res: Response) => res.json());
  }

  getFrontPageQuote(lang:string) {
    var query = "";
    if(lang == 'is') {
      query = 'posts?filter[category_name]=frontpage_quote_icelandic';
    } else {
      query = 'posts?filter[category_name]=frontpage_quote_english';
    }
    return this.http
      .get(this._wpBase + query)
      .map((res: Response) => res.json());
  }

  getFrontPageIntroductionText(lang:string) {
    var query = "";
    if(lang == 'is') {
      query = 'posts?filter[category_name]=frontpage_introduction_icelandic';
    } else {
      query = 'posts?filter[category_name]=frontpage_introduction_english';
    }
    return this.http
      .get(this._wpBase + query)
      .map((res: Response) => res.json());
  }

}
