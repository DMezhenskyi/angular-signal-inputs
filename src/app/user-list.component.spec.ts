import { TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';
import { By } from '@angular/platform-browser';

describe('UserListComponent', () => {

  it(`should render users from the input`, () => {
    const testUser = { id: 1, name: 'Test', lastName: 'Lastname', username: 'testname' };
    const fixture = TestBed.createComponent(UserListComponent)
    
    fixture.componentInstance.users = [testUser];
    fixture.detectChanges();
    
    const rows = fixture.debugElement.queryAll(By.css('li'));
    
    expect(rows.length).toBe(1);
    expect(rows[0].nativeElement.innerText).toContain('Test Lastname')
  })

})