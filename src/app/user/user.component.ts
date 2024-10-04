import { Component,EventEmitter,Input, Output} from '@angular/core';
import {type User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  standalone:true,
  styleUrl: './user.component.css',
  imports:[]
})
export class UserComponent {
  @Input({required:true}) user!:User;
  @Input({required:true}) selected!:boolean;
  @Output() select =new EventEmitter<string>();


  get ImagePath(){
    return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzKE4HPJzh44olmm_kmLQ4d3sniLey1qXclA&s' +this.user.avatar ;
  }
  onSelectUser(){
this.select.emit(this.user.id);
  }

}
