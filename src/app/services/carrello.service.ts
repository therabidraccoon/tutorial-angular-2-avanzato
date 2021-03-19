import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { JWT_TOKEN } from './../app.constants';

@Injectable({
  providedIn: 'root',
})
export class CarrelloService {
  readonly BASE_URL = 'http://localhost:8080/api';

  badge: number;
  constructor(private http: HttpClient) {}

  addItemToCart(codiceArticolo: string, quantita: number): Observable<any> {
    let resp: Observable<any>;
    let token = localStorage.getItem(JWT_TOKEN);
    console.log(codiceArticolo);
    let httpParams = new HttpParams()
      .set('codiceArticolo', codiceArticolo)
      .set('quantita', quantita.toString());

    resp = this.http.put(this.BASE_URL + '/carrello/add', null, {
      headers: {
        'auth-token': token,
      },
      params: httpParams,
      responseType: 'json',
    });

    return resp;
  }

  getCart() {
    let resp: Observable<any>;
    let token = localStorage.getItem(JWT_TOKEN);

    resp = this.http.get(this.BASE_URL + '/carrello/get-cart', {
      headers: {
        'auth-token': token,
      },
      responseType: 'json',
    });

    return resp;
  }
}
