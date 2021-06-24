import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PatientAddComponent } from './pages/patients/patient-add/patient-add.component';
import { PatientDetailsComponent } from './pages/patients/patient-details/patient-details.component';
import { PatientListComponent } from './pages/patients/patient-list/patient-list.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserAddComponent } from './pages/users/user-add/user-add.component';
import { UserDetailsComponent } from './pages/users/user-details/user-details.component';
import { UserListComponent } from './pages/users/user-list/user-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent },
  { path: 'users', component: UserListComponent },
  { path: 'users/details/:id', component: UserDetailsComponent },
  { path: 'users/add', component: UserAddComponent },
  { path: 'patients', component: PatientListComponent },
  { path: 'patients/details/:id', component: PatientDetailsComponent },
  { path: 'patients/add', component: PatientAddComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
