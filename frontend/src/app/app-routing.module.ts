import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { UsersEditComponent } from './components/users/users-edit/users-edit.component';
import { UsersCreateComponent } from './components/users/users-create/users-create.component';

import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'users', component: UsersListComponent, canActivate: [authGuard] },
  { path: 'users/edit/:userId', component: UsersEditComponent, canActivate: [authGuard] },
  { path: 'users/create', component: UsersCreateComponent, canActivate: [authGuard] },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
