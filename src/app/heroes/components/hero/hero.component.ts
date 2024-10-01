import { Component } from '@angular/core';

//Este decorador compomnent define el selector, template y estilos del componente
@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'IronMan';
  public age: number = 30;

  //Getter. Los getters el html los interpreta como propiedades
  get capitalizedName() : string {
    return this.name.toUpperCase();
  }

  //Metodo, este en el html si que va con () parentesis.
  getHeroDescription() : string {
    return `${this.name} - ${this.age}`;
  }


  //Cambiar variables, si fueran privados, haria falta un setter.
  changeName(anotherName: string) : void {
    this.name = anotherName;
  }

  changeAge(anotherAge: number) : void {
    this.age = anotherAge;
  }
}
