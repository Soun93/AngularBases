import { Component, EventEmitter, Output } from '@angular/core';
import { DbzCharacter } from '../../interfaces/dbz-characters.interface';

@Component({
  selector: 'dbz-form',
  template: `
  <form action="" (ngSubmit)="emitCharacter()">
    <h3>Agregar personaje</h3>
    <input 
      [(ngModel)]="character.name"
      name = "name"
      type="text" placeholder="Nombre">
    <input 
      [(ngModel)]="character.power" 
      name = "power"
      type="number" placeholder="Poder">
    <button type="submit"> Agregar </button>
  </form>
  `,
  styles: `
    form * {
      margin: 10px;
    }
  `
})

export class DbzFormModule {
  @Output()
  public onNewCharacter: EventEmitter<DbzCharacter> = new EventEmitter();

  public character: DbzCharacter = {
    id: '',
    name: '',
    power: 0
  }

  emitCharacter():void {
    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = {
      id: '',
      name: '',
      power: 0
    }
  }
}