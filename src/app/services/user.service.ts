import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiURL = environment.apiURL + 'users/';

  constructor(private httpClient: HttpClient) {}

  getByEmail(email: string): Observable<SingleResponseModel<User>> {
    let newPath = this.apiURL + 'getbymail?email=' + email;
    return this.httpClient.get<SingleResponseModel<User>>(newPath);
  }

  getUserById(userId: number): Observable<SingleResponseModel<User>> {
    let newUrl = this.apiURL + 'getbyid?id=' + userId;
    return this.httpClient.get<SingleResponseModel<User>>(newUrl);
  }

  update(user: User): Observable<ResponseModel> {
    let newUrl = this.apiURL + 'user/edit';
    return this.httpClient.post<ResponseModel>(newUrl, user);
  }
  add(user: User): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiURL + 'add', user);
  }
}
