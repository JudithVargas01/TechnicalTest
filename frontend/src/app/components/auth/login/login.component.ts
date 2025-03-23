import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formulario: FormGroup;
  authService = inject(AuthService);
  router = inject(Router);
  errorMessage: string = '';
  constructor() {
    this.formulario = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  async onSubmit() {
    const response = await this.authService.login(this.formulario.value);
    
    if (response.error !=  true) {
      console.log("tokeeen:",  response.token);
      localStorage.setItem('token', response.token);
      localStorage.setItem('user_role', response.userRole);
      if (response.userRole === 'admin') {
        this.router.navigate(['/users']);
      } else {
        this.router.navigate(['/login']);
      }
    }else{
      console.log("gfgfgdfggff");
      this.errorMessage = response.message || 'Invalid email or password';
    }
  }
}