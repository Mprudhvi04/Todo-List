import { Component,EventEmitter ,inject, Output, Input} from '@angular/core';
import { TasksService } from '../tasks.service';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-new-task',
  standalone:true,
  imports:[FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'

})
export class NewTaskComponent {
  @Input({required:true}) userId!:string;
  @Output() close = new EventEmitter<void>()
  
  enteredTitle = "";
  enteredSummary="";
  enteredDate="";
  private taskService=inject(TasksService)

  onCancel(){
    this.close.emit();
    

  }
  onsubmit(){
    this.taskService.addTask({
      title:this.enteredTitle,
      summary:this.enteredSummary,
      date:this.enteredDate
    },this.userId
  );
  this.close.emit();
    
  }


}
