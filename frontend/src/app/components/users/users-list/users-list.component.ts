import { Component, inject, signal } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  constructor(private router: Router) {}
  arrUsers = signal<any[]>([]);

  usersService = inject(UsersService);

  async ngOnInit() {
    const users = await this.usersService.getAll();
    this.arrUsers.set(users);
  }

  async onClickDelete(userId: string) {
    const user = await this.usersService.deleteById(userId);
    console.log(user);

    if (!user.error) {
      const users = await this.usersService.getAll();
      this.arrUsers.set(users);
    } else {
      console.log(user.error);
    }
  }
  async onClickEdit(userId: string) {
    const user = await this.usersService.deleteById(userId);
    console.log(user);

    if (!user.error) {
      const users = await this.usersService.getAll();
      this.arrUsers.set(users);
    } else {
      console.log(user.error);
    }
  }

}
