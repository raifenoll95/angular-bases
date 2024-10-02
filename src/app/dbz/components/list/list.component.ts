import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/chartacter.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 500
  }];

  //Obtener el id del elemento a borrar
  getIndex(index: number): void {
    console.log('indice', index);
  }

  //Emitir el indice a borrar
  emitId(id?: string) : void{

    //Validaciones
    if(id) {
      this.onDeleteCharacter.emit(id);
    }
    else {
      return;
    }
  }
}
