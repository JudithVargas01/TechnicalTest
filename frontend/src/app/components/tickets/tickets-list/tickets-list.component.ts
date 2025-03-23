import { Component, inject, signal } from '@angular/core';
import { TicketsService } from 'src/app/services/tickets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css']
})
export class TicketsListComponent {
  constructor(private router: Router) {}
  userRole: string | null = null;
  arrTickets = signal<any[]>([]);
  ticketsService = inject(TicketsService);

  async ngOnInit() {
    const tickets = await this.ticketsService.getAll();
    this.arrTickets.set(tickets);
    this.userRole = localStorage.getItem('user_role');

  }

  async onClickDelete(ticketId: string) {
    const ticket = await this.ticketsService.deleteById(ticketId);
    console.log(ticket);

    if (!ticket.error) {
      const tickets = await this.ticketsService.getAll();
      this.arrTickets.set(tickets);
    } else {
      console.log(ticket.error);
    }
  }

  onClickEdit(ticketId: string) {
    this.router.navigate(['/tickets/edit', ticketId]);
  }
}
