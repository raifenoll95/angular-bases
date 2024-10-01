// Un modulo es una clase con un decorador @NgModule.
// Este modulo solo se usa en este ambito pero para usarlo fuera necesitas exportarlo y por eso se usa el export

import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ]
})

export class CounterModule {

}
