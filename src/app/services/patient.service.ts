import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient.model';
import { PatientRequest } from '../payload/request/patient-request.model';

const BASE_URL = 'http://localhost:8080/api/patients';
// const BASE_URL = '/api/patients';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private http: HttpClient) {}

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(BASE_URL);
  }

  searchPatientByCode(code: string): Observable<Patient> {
    return this.http.get<Patient>(BASE_URL + '/search-by-code/' + code);
  }

  searchPatientsByName(name: string): Observable<Patient[]> {
    const params = new HttpParams().set('name', name);
    return this.http.get<Patient[]>(BASE_URL + '/search-by-name', {
      params: params,
    });
  }

  getPatientById(id: number): Observable<Patient> {
    return this.http.get<Patient>(BASE_URL + '/' + id);
  }

  addPatient(patientRequest: PatientRequest): Observable<Patient> {
    return this.http.post<Patient>(BASE_URL, {
      fullName: patientRequest.fullName,
      email: patientRequest.email,
      phone: patientRequest.phone,
      address: patientRequest.address,
      dob: patientRequest.dob,
    });
  }

  updatePatient(
    id: number,
    patientRequest: PatientRequest
  ): Observable<Patient> {
    return this.http.patch<Patient>(BASE_URL + '/' + id, {
      fullName: patientRequest.fullName,
      email: patientRequest.email,
      phone: patientRequest.phone,
      address: patientRequest.address,
      dob: patientRequest.dob,
    });
  }

  deletePatient(id: number): Observable<any> {
    return this.http.delete(BASE_URL + '/' + id);
  }
}
