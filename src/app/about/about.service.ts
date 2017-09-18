import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import { About } from './about';

@Injectable()
export class AboutService {

  private _wpBase = environment.apiBaseUrl + 'wp-json/wp/v2/';

  constructor(private http: Http) { }

  getAbouts(): Observable<About[]> {
    
    return this.http
      .get(this._wpBase + 'about')
      .map((res: Response) => res.json());

  }

  getAbout(slug): Observable<About> {
    
    return this.http
      .get(this._wpBase + `about?slug=${slug}`)
      .map((res: Response) => res.json());
  }

}
