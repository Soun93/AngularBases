import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = "Iron Man"
  public age: number = 45;

// ?Al utilizar un getter se puede utilizar como una variable declarada cualquiera
  get capitalizedName():string{
    return this.name.toUpperCase();
  }
  getHeroDescription():string{
    return `${this.name} tiene ${this.age}`
  }

  changeHero():void  {
    this.name = 'Spiderman';
  }
  changeAge():void {
    this.age = 33;
  }

  resetHero():void {
    this.age = 45;
    this.name = "Iron Man";
  }
}

