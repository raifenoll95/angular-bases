//Rai
//Las directivas ngif, ngFor... pertenecen a CommonModule. Hay que importarlo.
//Pista del tio: Los Module van en los imports.

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './components/hero/hero.component';
import { ListComponent } from './components/list/list.component';


@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  exports: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule{
}


