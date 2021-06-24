import { Component, OnInit } from '@angular/core';
import { PatientRequest } from 'src/app/payload/request/patient-request.model';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.scss'],
})
export class PatientAddComponent implements OnInit {
  patientRequest: PatientRequest = new PatientRequest();
  submitted = false;

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {}

  savePatient(): void {
    const data: PatientRequest = {
      fullName: this.patientRequest.fullName,
      email: this.patientRequest.email,
      phone: this.patientRequest.phone,
      address: this.patientRequest.address,
      dob: this.patientRequest.dob,
    };

    this.patientService.addPatient(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  newPatient(): void {
    this.submitted = false;
    this.patientRequest = new PatientRequest();
  }
}
