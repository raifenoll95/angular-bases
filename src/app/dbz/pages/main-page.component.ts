import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/chartacter.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  //Inyecccion de dependencias
  constructor( private dbzService: DbzService) {}

  get characters() : Character[] {
    return [...this.dbzService.characters]; //Spred devolvemos una 'copia'
  }

  ondeleteCharacter(id: string) : void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character) :void  {
    this.dbzService.onNewCharacter(character);
  }
}
