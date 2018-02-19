import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

 @Input() hero: Hero;  //To get hero as input from html 
 

 //Create parameterized constructor with different needed parameteres.
 constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
    ){ }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero=> this.hero = hero);
  }

  // User Location method back to navigate back to last page which brought us here to this method.
  goBack(): void{
    this.location.back();
  }


}