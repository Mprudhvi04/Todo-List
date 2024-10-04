import { Component,inject,Input } from '@angular/core';
import {type Task } from './task.model';
import { TasksService } from '../tasks.service';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-task',
  standalone:true,
  imports:[DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) task!: Task;
  private taskService =inject(TasksService);

  onCompleteTask(){
    this.taskService.removeTask(this.task.id)

}
}