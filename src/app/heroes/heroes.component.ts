import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  
  hero:Hero = {
    id:23,
    name:"Tewodros"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
