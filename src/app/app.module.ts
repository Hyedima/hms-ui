import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PatientListComponent } from './pages/patients/patient-list/patient-list.component';
import { PatientAddComponent } from './pages/patients/patient-add/patient-add.component';
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { UserAddComponent } from './pages/users/user-add/user-add.component';
import { HomeComponent } from './pages/home/home.component';
import { UserDetailsComponent } from './pages/users/user-details/user-details.component';
import { PatientDetailsComponent } from './pages/patients/patient-details/patient-details.component';
import { authInterceptorProviders } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PatientListComponent,
    PatientAddComponent,
    UserListComponent,
    UserAddComponent,
    HomeComponent,
    UserDetailsComponent,
    PatientDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
