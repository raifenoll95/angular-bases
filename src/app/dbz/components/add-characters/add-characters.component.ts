import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/chartacter.interface';

@Component({
  selector: 'app-dbz-add-characters',
  templateUrl: './add-characters.component.html',
  styleUrl: './add-characters.component.css'
})
export class AddCharactersComponent {

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter(): void {

    console.log(this.character);

    //Validaciones
    if(this.character.name.length === 0) return;

    debugger;

    this.onNewCharacter.emit(this.character);
  }
}
