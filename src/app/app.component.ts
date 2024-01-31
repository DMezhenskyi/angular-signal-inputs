import { Component } from '@angular/core';
import { UserListComponent } from './user-list.component';
import { User } from './models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserListComponent],
  template: `
    <section class="header">
      <button (click)="addUser()">Add Andy</button>
      <img width="120" src="./assets/logo-01.png" />
    </section>
    <app-user-list [users]="users" />
  `,
})
export class AppComponent {
  users: User[] = [
    { id: 1, name: 'Michael', lastName: 'Scott', username: 'michael.scott' },
    { id: 2, name: 'Dwight', lastName: 'Schrute', username: 'dwight.schrute' },
    { id: 3, name: 'Angela', lastName: 'Martin', username: 'angela.martin' },
    { id: 4, name: 'Jim', lastName: 'Halpert', username: 'jim.halpert' },
  ];

  addUser() {
    this.users = [
      {
        id: 5,
        name: 'Andy',
        lastName: 'Bernard',
        username: 'andy.bernard',
      },
      ...this.users,
    ];
    console.log('Current Users', this.users);
  }
}
