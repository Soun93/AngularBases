import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DbzCharacter } from '../../interfaces/dbz-characters.interface';

@Component({
  selector: 'dbz-characters',
  templateUrl:'./dbz-characters.html',
  styles: `
    ul {
      list-style: none;
    }
    li {
      border: 1px solid;
      border-radius: 5px;
      padding: 10px;
      margin:10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px
    }
    .first-character {
      background-color: grey;
      border: none;
    }
  `
})

export class CharactersDbzComponent {
  @Input()
  public characterList :DbzCharacter[] = []

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  emitCharacterId(id:string):void {
    this.onDelete.emit(id);
  }

}