import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';


@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  error: string = '';
  isLoading: boolean = false;

  constructor(
    public layoutService: LayoutService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    console.log("This is login component");
  }

  login() {
    if (!this.email || !this.password) {
      this.error = 'Email and password are required';
      return;
    }

    this.isLoading = true;
    this.error = '';

    this.authService.userExist(this.email).subscribe({
      next: exists => {
        if (exists) {
          this.authService.login(this.email, this.password)
            .then(result => {
              this.isLoading = false;
              this.router.navigate(['/account']);
            })
            .catch(err => {
              this.isLoading = false;
              this.error = err.message || 'Login failed';
            });
        } else {
          this.isLoading = false;
          this.error = 'No user found with this email';
        }
      },
      error: err => {
        this.isLoading = false;
        this.error = 'Error checking user existence';
      }
    });
  }
}