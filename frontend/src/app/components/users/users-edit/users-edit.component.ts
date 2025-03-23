import { Component, inject, signal } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent {
  formulario: FormGroup;
  router = inject(Router);
  editMessage: string = '';
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
        
        this.editMessage = 'New user created successfully ';
        setTimeout(() => {
          this.editMessage = '';
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
