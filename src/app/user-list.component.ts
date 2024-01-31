import { Component, Input, computed, signal } from '@angular/core';
import { User, ModifiedUser } from './models';

@Component({
  selector: 'app-user-list',
  standalone: true,
  template: `
    <input (input)="updateQuery($event)" placeholder="Start typing..." />
    <ul>
      @for (user of filteredUsers(); track user.id) {
        <li>{{ user.name }} {{ user.lastName }}</li>
      }
    </ul>
  `,
})
export class UserListComponent {
  @Input() users: User[] = [];

  protected filteredUsers = computed(() =>
    this.users.filter(({ name }) =>
      name.startsWith(this.query())
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
