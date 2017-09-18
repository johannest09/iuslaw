import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import { PracticeArea } from './practice-area';

@Injectable()
export class PracticeAreaService {

  private _wpBase = environment.apiBaseUrl + 'wp-json/wp/v2/';

  constructor(private http: Http) { }

  getPracticeAreas(): Observable<PracticeArea[]> {
    
    return this.http
      .get(this._wpBase + 'practice-areas')
      .map((res: Response) => res.json());

  }

  getPracticeArea(slug): Observable<PracticeArea> {
    
    return this.http
      .get(this._wpBase + `practice-areas?slug=${slug}`)
      .map((res: Response) => res.json());
  }

}
