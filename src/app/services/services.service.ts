import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  _url = 'https://api.escuelajs.co/api/v1/products'
  constructor(private http : HttpClient) {  }

  getCatalogo(){
    let header = new HttpHeaders().set('Type-content','aplication/json')

    return this.http.get(this._url,{
      headers:header
    })
  }

}
