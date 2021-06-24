import { Injectable } from '@angular/core';
import { CarDetailDto } from '../models/carDetailDto';
import { Customer } from '../models/customer';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  customer: string = 'customer';
  user: string = 'user';
  car: string = 'car';

  constructor() {}

  setItem(key: string, object: any) {
    localStorage.setItem(key, JSON.stringify(object));
  }
  getItem(key: string) {
    return JSON.parse(localStorage.getItem(key)!);
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }
  clean() {
    localStorage.clear();
  }
  getUser(): User {
    return JSON.parse(localStorage.getItem(this.user)!);
  }
  getCustomer(): Customer {
    return JSON.parse(localStorage.getItem(this.customer)!);
  }
  getCar(): CarDetailDto {
    return JSON.parse(localStorage.getItem(this.car)!);
  }
}
