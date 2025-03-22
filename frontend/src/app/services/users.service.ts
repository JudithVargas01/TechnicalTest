import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  httpClient = inject(HttpClient);
  baseUrl = 'http://localhost:3000/api/users';

  getAll() {
    return firstValueFrom(
      this.httpClient.get<any[]>(this.baseUrl)
    );
  }

  getById(userId: string) {
    return firstValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/${userId}`)
    );
  }

  create(formValues: any) {
    return firstValueFrom(
      this.httpClient.post<any>(this.baseUrl, formValues)
    );
  }

  update(userId: string, formValues: any) {
    return firstValueFrom(
      this.httpClient.put(`${this.baseUrl}/${userId}`, formValues)
    );
  }

  deleteById(userId: string) {
    return firstValueFrom(
      this.httpClient.delete<any>(`${this.baseUrl}/${userId}`)
    );
  }
}
