import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private auth: AuthService) {}

  isLogin(): void {
    const checkLogin = this.auth.login(this.email, this.password);

    if (checkLogin) {
      this.router.navigate(['/admin']);
    } else {
      alert('Please enter email and password');
    }
  }
  logout(): void {
    this.auth.logout;
    this.router.navigate(['/login']);
  }
}
