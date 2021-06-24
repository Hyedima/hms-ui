import { Component, OnInit } from '@angular/core';
import { UserRequest } from 'src/app/payload/request/user-request.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
})
export class UserAddComponent implements OnInit {
  userRequest: UserRequest = new UserRequest();
  submitted = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  saveUser(): void {
    const data: UserRequest = {
      fullName: this.userRequest.fullName,
      email: this.userRequest.email,
      password: this.userRequest.password,
    };

    this.userService.addUser(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  newUser(): void {
    this.submitted = false;
    this.userRequest = new UserRequest();
  }
}
