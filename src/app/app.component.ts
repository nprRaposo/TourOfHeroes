import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero}}</h2>
    <p>Heroes:</p>
    <ul>
      <li *ngFor="let hero of heroes">
        {{ hero.name }}
    </li>
  </ul>
`
})
export class AppComponent  { 
  title : string; 
  myHero : string;
  heroes : Hero [];

  constructor(){
    this.title = "Tour of heroes";
    this.heroes = [
      new Hero(1, "Batman"),
      new Hero(2, "Superman"),
      new Hero(3, "Wonder Woman")
    ];
    this.myHero = this.heroes[0].name;
  }
}
