import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
/**導入上層目錄的hero.ts */
import { HEROES } from '../mock-heroes';
/**導入上層目錄的mock-heroes */
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  /**引用app/hero.ts */
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  selectedHero: Hero;
/**類似javascript onclick概念 */
onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
  constructor() { }

  ngOnInit() {
  }

}
