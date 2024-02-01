import { DbzCharacter } from './../interfaces/dbz-characters.interface';
import { DbzService } from './../services/dbz.services';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dbz-main',
  templateUrl: './main-page.html',
  styleUrl:'./main-page.css'
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {
  }

  get characters(): DbzCharacter[] {
    return [...this.dbzService.characters];
  }

  onDelete(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character:DbzCharacter): void {
    this.dbzService.addNewCharacter(character);
  }
}