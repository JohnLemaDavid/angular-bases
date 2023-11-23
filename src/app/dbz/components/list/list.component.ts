import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public charactersList:Character[]=[
    {
      name:'Trunk',
      power:10,
    }
  ]

  @Output()
  //public onDelete: EventEmitter<number>=new EventEmitter();
    public onDelete: EventEmitter<string>=new EventEmitter();


  // onDeleteCharacter(index:number):void{

  //   this.onDelete.emit(index);
  // }

  deleteCharacterById(id?:string):void{

    if (!id) return;
    this.onDelete.emit(id);

  }


}

