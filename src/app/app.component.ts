import { Component } from '@angular/core';
import { DUMMY_USERS } from './user/dummy-user';
import { HeaderComponent } from './header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone:true,
  imports:[HeaderComponent,UserComponent,TasksComponent],
  

})
export class AppComponent {
  title = 'first-angular-app';
  users=DUMMY_USERS;
  selectedUserId? :string;   
  // selectedUserId ='u1';    //instead of initialising the value as u1
  get selectedUser(){
    return this.users.find((user)=>user.id===this.selectedUserId);
  }
  onSelectUser(id:string){
    this.selectedUserId=id;
  }
}
