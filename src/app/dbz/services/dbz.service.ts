//Servicio es una clase con un decorador Injectable

import { Injectable } from '@angular/core';
import { Character } from '../interfaces/chartacter.interface';
import {v4 as uuid} from 'uuid';

//Decorador
@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Gohan',
    power: 5000
  },
  {
    id: uuid(),
    name: 'Piccollo',
    power: 740
  }];

  onNewCharacter(character: Character): void {

    const newCharacter: Character = { id: uuid(), ...character}; //Spread: Mete el id y el resto de atributos "copialos"
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number): void {
  //   this.characters.splice(index,1);
  // }

  deleteCharacterById(id : string) {
    this.characters = this.characters.filter(chartacter => chartacter.id != id );
  }

  constructor() { }

}
