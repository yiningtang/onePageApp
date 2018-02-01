import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import IJob from './job';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getData(url) : Observable<IJob> {
  	return this.http.get(url).map((res:IJob) => res);
  }

}
