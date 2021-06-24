import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/models/patient.model';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss'],
})
export class PatientDetailsComponent implements OnInit {
  currentPatient?: Patient;
  message = '';

  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.message = '';
    this.getPatient(+this.route.snapshot.params.id);
  }

  getPatient(id: number): void {
    this.patientService.getPatientById(id).subscribe(
      (data) => {
        this.currentPatient = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updatePatient(): void {
    this.message = '';

    if (this.currentPatient != null) {
      this.patientService
        .updatePatient(this.currentPatient.id, this.currentPatient)
        .subscribe(
          (data) => {
            console.log(data);
            this.message = 'This patient was updated successfully!';
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }

  deletePatient(): void {
    if (this.currentPatient != null) {
      this.patientService.deletePatient(this.currentPatient.id).subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['/patients']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
