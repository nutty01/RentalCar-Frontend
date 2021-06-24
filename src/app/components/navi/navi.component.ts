import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  isLogOK() {
    if (sessionStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  getUser() {
    return sessionStorage.getItem('fullName');
  }

  logout() {
    this.authService.logOut();
    this.toastr.info('Succesful Log Out', 'Info');
    this.router.navigate(['/homepage']);
  }
}
