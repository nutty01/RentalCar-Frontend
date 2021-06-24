import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarImage } from 'src/app/models/carImage';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  defaultPath = 'https://localhost:44360';
  cars: Car[] = [];
  carDetail: CarDetailDto[] = [];
  currentCar: Car;
  images: CarImage[];
  dataLoaded: boolean = false;
  imageUrl = environment.baseURL;
  brands: Brand[] = [];
  colors: Color[] = [];

  brandFilter: number;
  colorFilter: number;

  constructor(
    private carService: CarService,
    private activedRoute: ActivatedRoute,
    private colorService: ColorService,
    private brandService: BrandService,
    private carImageService: CarImageService
  ) {}

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
    this.activedRoute.params.subscribe((params) => {
      if (params['selectedBrandId'] && params['selectedColorId']) {
        this.getCarByBrandAndColor(
          params['selectedBrandId'],
          params['selectedColorId']
        );
      } else if (params['brandId']) {
        this.getCarsByBrand(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsByColor(params['colorId']);
      } else {
        this.getCars();
      }
    });
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.carDetail = response.data;
      this.dataLoaded = true;
    });
  }
  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  getCarsByBrand(brandId: number) {
    this.carService.getallcardetailsbybrandid(brandId).subscribe((response) => {
      this.carDetail = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByColor(colorId: number) {
    this.carService.getallcardetailbycolorid(colorId).subscribe((response) => {
      this.carDetail = response.data;
      this.dataLoaded = true;
    });
  }

  setCurrentCar(car: Car) {
    this.currentCar = car;
  }

  getCarImagesByCarId(carId: number) {
    this.carImageService.getCarImagesByCarId(carId).subscribe((response) => {
      this.images = response.data;
    });
  }

  getCarByBrandAndColor(brandId: number, colorId: number) {
    this.carService
      .getcarbybrandidandcolorid(brandId, colorId)
      .subscribe((response) => {
        this.carDetail = response.data;
        this.dataLoaded = true;
      });
  }

  getCarClass(car: Car) {
    if (car == this.currentCar) {
      return 'table-info cursorPointer';
    } else {
      return 'cursorPointer';
    }
  }
  getSelectedBrand(brandId: number) {
    if (this.brandFilter == brandId) {
      return true;
    } else {
      return false;
    }
  }

  getSelectedColor(colorId: number) {
    if (this.colorFilter == colorId) {
      return true;
    } else {
      return false;
    }
  }
}
