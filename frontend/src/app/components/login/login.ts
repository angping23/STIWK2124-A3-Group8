import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  username = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router) {}

  login() {

    if (
      this.username === 'group8' &&
      this.password === '1234'
    ) {

      localStorage.setItem('loggedIn', 'true');

      this.router.navigate(['/books']);

    } else {

      this.errorMessage = 'Invalid username or password';

    }
  }
}

