import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { JWT_TOKEN } from '../app.constants';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  constructor() {}
  public storeJWTToken(token: string) {
    localStorage.setItem(JWT_TOKEN, token);
  }

  public decodeToken(): any {
    let token = localStorage.getItem(JWT_TOKEN);
    let decode = jwt_decode(token);
    return decode;
  }
}
