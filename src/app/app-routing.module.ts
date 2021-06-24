import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RegisterComponent } from './components/register/register.component';
import { RentalComponent } from './components/rental/rental.component';
import { LoginGuard } from './guards/login.guard';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomepageComponent,
  },
  {
    path: 'homepage/:loginModel',
    pathMatch: 'full',
    component: HomepageComponent,
  },
  { path: 'homepage', pathMatch: 'full', component: HomepageComponent },
  {
    path: 'cars',
    component: CarComponent,
  },
  {
    path: 'brands',
    component: BrandComponent,
  },
  {
    path: 'colors',
    component: ColorComponent,
  },
  {
    path: 'customers',
    component: CustomerComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'rentals',
    component: RentalComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'cars/brand/:brandId',
    component: CarComponent,
  },
  {
    path: 'cars/color/:colorId',
    component: CarComponent,
  },

  { path: 'cars/car-detail/:id', component: CarDetailComponent },
  {
    path: 'cars/filter/brand/:selectedBrandId/color/:selectedColorId',
    component: CarComponent,
  },
  {
    path: 'cars/rental/:id',
    component: RentalComponent,
  },
  {
    path: 'payment/:rental',
    component: PaymentComponent,
    canActivate: [LoginGuard],
  },
  { path: 'car/add', component: CarAddComponent, canActivate: [LoginGuard] },
  // { path: 'color/add', component: ColorAddComponent },
  {
    path: 'brand/add',
    component: BrandAddComponent,
    canActivate: [LoginGuard],
  },
  // { path: 'list', component: ListComponent },
  {
    path: 'brand/update/:brandId',
    component: BrandUpdateComponent,
    canActivate: [LoginGuard],
  },
  // { path: 'color/update/:colorId', component: ColorUpdateComponent },
  {
    path: 'car/update/:id',
    component: CarUpdateComponent,
    canActivate: [LoginGuard],
  },
  // { path: 'car/addImage/:id', component: CarImageAddComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
