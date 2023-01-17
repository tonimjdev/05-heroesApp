import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor( private http: HttpClient ) { }

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>('http://localhost:3000/heroes');
  }

  getHeroeById( id: string ): Observable<Heroe> {
    return this.http.get<Heroe>(`http://localhost:3000/heroes/${ id }`);
    
  }

}
