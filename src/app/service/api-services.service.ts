import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  serve:  string = "";
  constructor(private http:HttpClient) { }


  Api(dados:any, api:string){
    const httpOpitions={
      headrs: new HttpHeaders({'Content-Type':'application/json'})
    };
    let url = this.serve + api;
    return this.http.post(url, JSON.stringify(dados));
  }
}
