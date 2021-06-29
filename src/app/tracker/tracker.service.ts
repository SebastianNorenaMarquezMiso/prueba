import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Tracker } from './tracker';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {

  url(): string {
    return environment.baseUrl;
  }

  urlIP():string
  {
    return environment.baseUrlIP;
  }
  param(): string {
    return environment.param;
  }

  constructor(private http: HttpClient) { }

  getAllTracker(ip:string): Observable<Tracker> {
    return this.http.get<Tracker>(this.url() + this.param()+ip);
  }
  public getIPAddress()
  {
    return this.http.get(this.urlIP());
  }

}
