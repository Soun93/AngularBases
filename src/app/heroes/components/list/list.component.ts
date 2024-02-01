import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroesNames:string[] = ['Spiderman', 'Hulk', 'Thor', 'She Hulk'];
  public deletedHero?:string;

  removeLastHero():void {
    this.deletedHero = this.heroesNames.pop();
  }
}
