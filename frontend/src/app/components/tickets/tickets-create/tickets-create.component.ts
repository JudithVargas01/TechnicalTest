import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TicketsService } from 'src/app/services/tickets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tickets-create',
  templateUrl: './tickets-create.component.html',
  styleUrls: ['./tickets-create.component.css']
})
export class TicketsCreateComponent {
  form: FormGroup;
  router = inject(Router);
  createMessage: string = '';
  errorMessage: string = '';
  ticketsService = inject(TicketsService);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required],
      assignedUser: [null] 
    });
  }

  async onSubmit() {
    if (this.form.valid) {
      const response = await this.ticketsService.create(this.form.value);
      console.log(response);

      if (!response.error) {
        this.createMessage = 'New ticket created successfully';
        setTimeout(() => {
          this.createMessage = '';
          this.router.navigate(['/tickets']); 
        }, 3000); 
      } else {
        this.errorMessage = 'Error creating the ticket. Please try again.';
      }
    } else {
      this.errorMessage = 'Please fill in all required fields correctly.';
    }
  }

  async goBack() {
    this.router.navigate(['/tickets']);
  }
}
