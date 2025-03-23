import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { UsersEditComponent } from './components/users/users-edit/users-edit.component';
import { UsersCreateComponent } from './components/users/users-create/users-create.component';
import { TicketsCreateComponent } from './components/tickets/tickets-create/tickets-create.component';
import { TicketsListComponent } from './components/tickets/tickets-list/tickets-list.component';
import { TicketsEditComponent } from './components/tickets/tickets-edit/tickets-edit.component';

import { authGuard } from './guards/auth.guard';
import { adminGuard } from './guards/admin.guard'; 

const routes: Routes = [
  { path: 'users', component: UsersListComponent, canActivate: [authGuard, adminGuard] },
  { path: 'users/edit/:userId', component: UsersEditComponent, canActivate: [authGuard, adminGuard] },
  { path: 'users/create', component: UsersCreateComponent, canActivate: [authGuard, adminGuard] },

  { path: 'tickets', component: TicketsListComponent, canActivate: [authGuard] },
  { path: 'tickets/edit/:userId', component: TicketsEditComponent, canActivate: [authGuard] },
  { path: 'tickets/create', component: TicketsCreateComponent, canActivate: [authGuard] },


  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
