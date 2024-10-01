import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heoreNames : string[] = ['Spiderman', 'Rai', 'Javi Ales', 'Jaime Jumper', 'SuperMan'];
  public deteletLastHeroe?: string;

  //Elimina el ultimo heroe
  removeLastHeroe() :void  {
    this.deteletLastHeroe = this.heoreNames.pop();
  }

  removeLastHeroe2() :string | undefined  {
    return this.heoreNames.pop();
  }
}
