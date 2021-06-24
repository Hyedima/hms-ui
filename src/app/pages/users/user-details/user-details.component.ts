import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  currentUser?: User;
  message = '';

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.message = '';
    this.getUser(+this.route.snapshot.params.id);
  }

  getUser(id: number): void {
    this.userService.getUserById(id).subscribe(
      (data) => {
        this.currentUser = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateUser(): void {
    this.message = '';

    if (this.currentUser != null) {
      this.userService
        .updateUser(this.currentUser.id, this.currentUser)
        .subscribe(
          (data) => {
            console.log(data);
            this.message = 'This user was updated successfully!';
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }

  deleteUser(): void {
    if (this.currentUser != null) {
      this.userService.deleteUser(this.currentUser.id).subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['/users']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
