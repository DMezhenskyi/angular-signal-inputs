import { Component, computed, effect, input, signal } from '@angular/core';
import { User, ModifiedUser } from './models';

@Component({
  selector: 'app-user-list',
  standalone: true,
  template: `
    <input (input)="updateQuery($event)" placeholder="Start typing..." />
    <ul>
      @for (user of filteredUsers(); track user.id) {
        <li>{{ user.displayName }}</li>
      }
    </ul>
  `,
})
export class UserListComponent {

  userList = input.required({
    alias: 'users',
    transform: concatUserNames
  });

  constructor() {
    effect(() => {
      // the way we track changes in signals
      console.log('New Input value is: ', this.userList());
    })
  }

  protected filteredUsers = computed(() =>
    this.userList().filter(({ displayName }) =>
      displayName.startsWith(this.query())
    )
  );

  private query = signal('');

  updateQuery(e: Event) {
    this.query.set((e.target as HTMLInputElement).value);
  }
}

function concatUserNames(users: User[]): ModifiedUser[] {
  return users.map(({ name, lastName, ...user }) => ({
    ...user,
    displayName: `${name} ${lastName}`,
  }));
}
