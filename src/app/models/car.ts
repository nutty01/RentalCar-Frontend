import { CarImage } from './carImage';

export interface Car {
  id: number;
  brandId: number;
  colorId: number;
  dailyPrice: number;
  modelYear: number;
  carImage: CarImage[];
  imagePath: string;
  minFindexScore?: number;
}
