import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListHeroeComponent {

  public heroeNames:string[]= ['Spiderman','Ironman','Hulk','Thor','Doctor Strange']
  public deleteHero?:string;

  removeLastHero():void{
    this.deleteHero = this.heroeNames.pop();

  }


}
