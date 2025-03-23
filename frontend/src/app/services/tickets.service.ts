import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  getUserById(id: string) {
    throw new Error('Method not implemented.');
  }

  httpClient = inject(HttpClient);
  baseUrl = 'http://localhost:3000/api/tickets';

  getAll() {
    return firstValueFrom(
      this.httpClient.get<any[]>(this.baseUrl)
    );
  }

  getById(ticketId: string) {
    return firstValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/${ticketId}`)
    );
  }

  create(formValues: any) {
    const token = localStorage.getItem('token');
    console.log("TOKEEEEN:", token)
    if (!token) {
      console.error('Token not found');
      return;
    }
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return firstValueFrom(
      this.httpClient.post<any>(this.baseUrl, formValues, { headers })
    );
  }

  update(ticketId: string, formValues: any) {
    return firstValueFrom(
      this.httpClient.put(`${this.baseUrl}/${ticketId}`, formValues)
    );
  }

  deleteById(ticketId: string) {
    return firstValueFrom(
      this.httpClient.delete<any>(`${this.baseUrl}/${ticketId}`)
    );
  }
}
