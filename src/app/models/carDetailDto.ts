import { CarImage } from './carImage';

export interface CarDetailDto {
  id: number;
  brandId: number;
  colorId: number;
  carName: string;
  brandName: string;
  colorName: string;
  imagePath: string;
  dailyPrice: number;
  modelYear: number;
  carImage: CarImage[];
}
