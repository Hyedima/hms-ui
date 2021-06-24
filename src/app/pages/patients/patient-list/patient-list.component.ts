import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient.model';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss'],
})
export class PatientListComponent implements OnInit {
  patients: Patient[] = [];
  currentPatient?: Patient;
  currentIndex = -1;

  searchCode = '';
  searchName = '';

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.retrievePatients();
  }

  retrievePatients(): void {
    this.patientService.getPatients().subscribe(
      (data) => {
        this.patients = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  refreshList(): void {
    this.retrievePatients();
    this.currentPatient = undefined;
    this.currentIndex = -1;
  }

  setActivePatient(patient: Patient, index: number): void {
    this.currentPatient = patient;
    this.currentIndex = index;
  }

  removeAllPatients(): void {
    // this.userService.deleteAll().subscribe(
    //   (response) => {
    //     console.log(response);
    //     this.refreshList();
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }

  searchByCode(): void {
    const patientIndex = this.patients?.findIndex(
      (patient) => patient.code == this.searchCode
    );
    const patient = this.patients[patientIndex];
    this.setActivePatient(patient, patientIndex);
  }

  searchByName(): void {
    this.patientService.searchPatientsByName(this.searchName).subscribe(
      (data) => {
        this.patients = data;
        this.currentPatient = undefined;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
