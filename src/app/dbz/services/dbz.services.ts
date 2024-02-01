import { Injectable } from '@angular/core';
import { DbzCharacter } from '../interfaces/dbz-characters.interface';
import { v4 as uuid } from 'uuid'

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters :DbzCharacter[] = [
    {
      id: uuid(),
      name:'Krilin',
      power: 500,
    },{
      id: uuid(),
      name:'Goku',
      power: 10000,      
    },
    {
      id: uuid(),
      name:'Vegeta',
      power: 9000,      
    }
  ]

  addNewCharacter( character: DbzCharacter):void {
    // debugger;
    character.id = uuid();
    this.characters.push({...character})
  }

  deleteCharacterById(id: string):void {
    this.characters = this.characters.filter(character => character.id !== id )
  }
}