//Este modulo tiene el componente MainPageComponent, por lo que va en declarations y en exports.

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharactersComponent } from './components/add-characters/add-characters.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [MainPageComponent, ListComponent, AddCharactersComponent],
  exports: [MainPageComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
