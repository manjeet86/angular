import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero'
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  //selectedHero: Hero;

  //HeroService object injected at contructure level.
  constructor(private heroService: HeroService) { 
    console.log("Constructor Called ... ");
  }

  // call all initial data related function here. 
  // It is called right after contructure is called.
  ngOnInit() {
    this.getHeroes();
  }
  
  // get heroes from Hero Service / Now instead subscriber to ansynchronous Service Method.
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(
      heroes => this.heroes = heroes);
  }

  // Update selected Hero value.
 /* onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }*/

}
