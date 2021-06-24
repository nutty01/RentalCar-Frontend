import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rental } from 'src/app/models/rental';
import { CustomerService } from 'src/app/services/customer.service';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customer';
import { RentalService } from 'src/app/services/rental.service';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { Car } from 'src/app/models/car';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
})
export class RentalComponent implements OnInit {
  rentals: Rental[] = [];
  customers: Customer[];

  customerId: number;
  rentDate: Date;
  returnDate: Date;
  rentBeginDate: Date;
  rentEndDate: Date;

  @Input() carDetails: CarDetailDto;

  constructor(
    private rentalService: RentalService,
    private router: Router,
    private customerService: CustomerService,
    private toastr: ToastrService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer() {
    this.customerService.getCustomer().subscribe((response) => {
      console.log(response);
      this.customers = response.data;
    });
  }

  isLogOK() {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.toastr.error('Must be Login or Register', 'Error');
      this.router.navigate(['/homepage']);
      return false;
    }
  }

  getDate(day: number) {
    var today = new Date();
    today.setDate(today.getDate() + day);
    return today.toISOString().slice(0, 10);
  }

  create() {
    let rental: Rental = {
      carId: this.carDetails.id,
      customerId: parseInt(this.customerId.toString()),
      rentDate: this.rentDate,
      returnDate: this.returnDate,
    };
    this.rentalService.add(rental).subscribe(
      (repsonse) => {
        console.log(repsonse);
        this.toastr.info('Navigate to  Payment Page');
        this.toastr.success('Rent Done');
        this.router.navigate(['/payment', JSON.stringify(rental)]);
      },
      (responseError) => {
        console.info(responseError);
        if (responseError.error.message) {
          this.toastr.warning(responseError.error.message, 'Warning');
        } else if (
          responseError.error.Errors[0] ||
          responseError.error.Errors[1]
        ) {
          this.toastr.warning(
            responseError.error.Errors[0].ErrorMessage,
            'Warning'
          );
          this.toastr.warning(
            responseError.error.Errors[1].ErrorMessage,
            'Warning'
          );
        }

        // this.toastr.warning(responseError.error.Message);
      }
    );
  }
}
