import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent {
  formulario: FormGroup;
  router = inject(Router);
  createMessage: string = '';
  errorMessage: string = '';
  usersService = inject(UsersService);

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      role: ['', Validators.required]
    });
  }

  async onSubmit() {
    if (this.formulario.valid) {
      const response = await this.usersService.create(this.formulario.value);
      console.log(response);
  
      if (response.error !=  true) {
        
        this.createMessage = 'New user created successfully ';
        setTimeout(() => {
          this.createMessage = '';
          this.router.navigate(['/users']); 
        }, 3000); 
      }else{
        console.log("gfgfgdfggff");
      }
    }else{
      this.errorMessage = 'Please fill in all required fields correctly.';

    }
  }
  async goBack() {
    this.router.navigate(['/users']);
  }
}