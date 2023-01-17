import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor( private activatedRoute: ActivatedRoute, 
                private heroesService: HeroesService ) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.heroesService.getHeroeById(id))
    )
    .subscribe( heroe => this.heroe = heroe );
  }

}
