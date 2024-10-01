//Pista del tio: Los Module van en los imports.

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/Heroes.module';

// En Imports hemos importado nuestro Modulo CounterModule. De esta manera, todos los componentes que tengan este modulo,no necesitamos meterlos en Declarations, si no que vienen
//incluidos en CounterModule. Modulo = Agrupacion de Componentes.
@NgModule({
  declarations: [
    AppComponent,
    //CounterComponent
    //HeroComponent,
    //ListComponent
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
