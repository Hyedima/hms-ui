import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  currentUser?: User;
  currentIndex = -1;
  searchName = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.retrieveUsers();
  }

  retrieveUsers(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  refreshList(): void {
    this.retrieveUsers();
    this.currentUser = new User();
    this.currentIndex = -1;
  }

  setActiveUser(user: User, index: number): void {
    this.currentUser = user;
    this.currentIndex = index;
  }

  removeAllUsers(): void {
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

  searchByName(): void {
    const userIndex = this.users.findIndex(
      (user) => user.fullName == this.searchName
    );
    const patient = this.users[userIndex];
    this.setActiveUser(patient, userIndex);
  }
}
