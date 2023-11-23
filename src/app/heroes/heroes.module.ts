import { NgModule } from '@angular/core';
import { ListHeroeComponent} from './list/list.component';
import { HeroComponent } from './hero/hero.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeroComponent,
    ListHeroeComponent,
  ],
  exports:[
    HeroComponent,
    ListHeroeComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class HeroesModule{

}
