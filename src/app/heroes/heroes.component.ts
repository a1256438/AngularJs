import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
/**導入上層目錄的hero.ts */
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  /**hero.ts */
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  constructor() { }

  ngOnInit() {
  }

}
