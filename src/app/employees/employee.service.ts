import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import { Employee } from './employee';

@Injectable()
export class EmployeeService {

  private _wpBase = environment.apiBaseUrl + 'wp-json/wp/v2/';

  constructor(private http: Http) { }

  getEmployees(): Observable<Employee[]> {
    
    return this.http
      .get(this._wpBase + 'employees?_embed')
      .map((res: Response) => res.json());

  }

  getEmployee(slug): Observable<Employee> {
    
    return this.http
      .get(this._wpBase + `employees?_embed&slug=${slug}`)
      .map((res: Response) => res.json());
  }

}
