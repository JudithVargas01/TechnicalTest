import { Component, inject, runInInjectionContext } from '@angular/core';
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

  constructor() {
    this.formulario = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  async onSubmit() {
    const response = await this.authService.login(this.formulario.value);
    console.log("tokennn:",response.token);
    console.log("roleee:",response.userRole);


    if (!response.error) {
      localStorage.setItem('token', response.token);
      localStorage.setItem('user_role', response.userRole);
      if (response.user.role === 'admin') {
        this.router.navigate(['/admin/dashboard']);
      } else {
        this.router.navigate(['/user/tickets']);
      }
    }else{
      console.log("errororrrr:",response);

    }
  }

}