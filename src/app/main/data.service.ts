import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private GetUrl = "http://www.mocky.io/v2/5ea172973100002d001eeada";

  constructor(private http: HttpClient) { }

  sendGetRequest(): Observable<any> {
    return this.http.get(this.GetUrl)
  } 
}
