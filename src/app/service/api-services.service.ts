import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiServicesService {
  serve:  string = 'http://localhost/apiAngular/';

  constructor(private http:HttpClient) { }

  Api(dados: any, api: string){
    const httpOpitions={
      headers: new HttpHeaders({'Content-Type':'application/json'})
    };
    const url = this.serve + api;
    return this.http
      .post(url, JSON.stringify(dados), httpOpitions)
      .pipe(map((res) => res));

  }
}
