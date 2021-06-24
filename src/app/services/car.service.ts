import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetailDto } from '../models/carDetailDto';
import { ResponseModel } from '../models/responseModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiURL = environment.apiURL;
  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiURL + 'cars/getcardetails';
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
  getcardetailbyid(id: number): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiURL + 'cars/getcardetailbyid?id=' + id;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
  getallcardetailsbybrandid(
    brandId: number
  ): Observable<ListResponseModel<CarDetailDto>> {
    let newPath =
      this.apiURL + 'cars/getallcardetailbybrandid?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getallcardetailbycolorid(
    colorId: number
  ): Observable<ListResponseModel<CarDetailDto>> {
    let newPath =
      this.apiURL + 'cars/getallcardetailbycolorid?colorId=' + colorId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  add(car: Car): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiURL + 'cars/add', car);
  }
  getcarbybrandidandcolorid(
    brandId: number,
    colorId: number
  ): Observable<ListResponseModel<CarDetailDto>> {
    let newPath =
      this.apiURL +
      'cars/getcarsbybrandidandcolorid?brandId=' +
      brandId +
      '&colorId=' +
      colorId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  update(car: Car): Observable<ResponseModel> {
    console.log(car);
    return this.httpClient.post<ResponseModel>(
      this.apiURL + 'cars/update',
      car
    );
  }

  delete(car: Car): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiURL + 'cars/delete',
      car
    );
  }
}
