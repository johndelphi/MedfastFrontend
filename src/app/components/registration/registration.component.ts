import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  name = '';
  email = '';
  password = '';

  constructor(private apiService: ApiService, private router: Router) {}

  onSubmit() {
    this.apiService.registerUser({ name: this.name, email: this.email, password: this.password }).subscribe(
      (response: any) => {
        // Handle successful registration, e.g., navigate to the login page
        this.router.navigate(['/login']);
      },
      (error) => {
        // Handle registration error, e.g., display an error message
        console.error('Registration failed:', error);
      }
    );
  }
}
