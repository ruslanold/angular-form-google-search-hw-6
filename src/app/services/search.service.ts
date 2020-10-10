import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }
  
  getResult(query: string): Observable<any> {
    return this.httpClient.jsonp(`${environment.serverUrl}${query}`, 'callback')
  }
}
