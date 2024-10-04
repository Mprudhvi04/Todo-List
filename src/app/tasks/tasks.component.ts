import { Component,Input} from '@angular/core';
import { NewTaskComponent } from './new-task/new-task.component';

import { TasksService } from './tasks.service';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  standalone:true,
  imports:[TaskComponent, NewTaskComponent],
})

export class TasksComponent {
@Input({required:true}) userId!:string
@Input({required:true}) name?: string;
isAddingTask = false;
// tasksService = new TasksService();
constructor (private tasksService:TasksService){

}


get selectedUserTasks(){
  return this.tasksService.getUserTasks(this.userId);
}
onCompleteTask(id:string){
  

}
onStartAddTask(){
this.isAddingTask =true;

}
onCloseAddTask(){
  this.isAddingTask =false;
}

}
