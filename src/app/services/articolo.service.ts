import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JWT_TOKEN } from '../app.constants';

@Injectable({
  providedIn: 'root',
})
export class ArticoloService {
  readonly BASE_URL = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  findAll(): Observable<any> {
    let resp: Observable<any>;
    let token = localStorage.getItem(JWT_TOKEN);
    resp = this.http.get(this.BASE_URL + '/articoli/find-all', {
      headers: {
        'auth-token': token,
      },
    });

    return resp;
  }
}
