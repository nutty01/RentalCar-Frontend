import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiURL = environment.apiURL + 'auth/';

  constructor(private httpClient: HttpClient, private router: Router) {}

  login(user: LoginModel): Observable<SingleResponseModel<TokenModel>> {
    let newPath = this.apiURL + 'login';
    return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath, user);
  }

  isAuthenticated() {
    if (sessionStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  register(
    registerModel: RegisterModel
  ): Observable<SingleResponseModel<TokenModel>> {
    let newPath = this.apiURL + 'register';
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      newPath,
      registerModel
    );
  }

  logOut() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('email');
  }
}
