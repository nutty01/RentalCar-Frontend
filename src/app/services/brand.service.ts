import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl = 'https://localhost:44360/api/';

  constructor(private httpClient: HttpClient) {}

  getBrands(): Observable<ListResponseModel<Brand>> {
    let newPath = this.apiUrl + 'brands/getall';
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }
  add(brand: Brand): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'brands/add',
      brand
    );
  }
  getBrandById(brandId: number): Observable<SingleResponseModel<Brand>> {
    let newUrl = this.apiUrl + 'brands/getbyid?id=' + brandId;
    return this.httpClient.get<SingleResponseModel<Brand>>(newUrl);
  }

  update(brand: Brand): Observable<ResponseModel> {
    let newUrl = this.apiUrl + 'brands/update';
    return this.httpClient.post<ResponseModel>(newUrl, brand);
  }

  delete(brand: Brand): Observable<ResponseModel> {
    let newUrl = this.apiUrl + 'brands/delete';
    return this.httpClient.post<ResponseModel>(newUrl, brand);
  }
}
