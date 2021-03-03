import { Component, OnInit, ɵConsole } from '@angular/core';
import { HeroesService, Heroe } from "../../services/heroes.services";
import {Router} from "@angular/router";


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  constructor(private _heroeservices: HeroesService,
              private router:Router) {
    
    console.log('contructor');
   }

  ngOnInit() {
   // console.log('ngoningnit');
    this.heroes = this._heroeservices.getHerores();
    console.log(this.heroes);
  }

  verHeroe(idx:number) {
   this.router.navigate(['/heroe',idx])
  }
}
