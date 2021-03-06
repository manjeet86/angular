import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';
  // Make private injection to HeroService from MessageService - Service in Service.
  constructor(private messageService: MessageService,
              private http: HttpClient) { }

 
  // List View from Mocked Hero List.
 /* getHeroes(): Observable<Hero[]>{
    this.messageService.addMessage('Hero Service: fetched the heroes');
    return of(HEROES);
  } */

  /** GET heroes from the server */
getHeroes (): Observable<Hero[]> {
  return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      tap(heroes => this.log(`fetched heroes`)),
      catchError(this.handleError('getHeroes', []))
    );
}

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}



/** GET hero by id. Will 404 if id not found */
getHero(id: number): Observable<Hero> {
  const url = `${this.heroesUrl}/${id}`;
  return this.http.get<Hero>(url).pipe(
    tap(_ => this.log(`fetched hero id=${id}`)),
    catchError(this.handleError<Hero>(`getHero id=${id}`))
  );
}

 /* // Selected Hero value from Array List.
  getHero(id: number): Observable<Hero> {
    this.messageService.addMessage(`HeroService: fetched hero id:${id}`);
    return of(HEROES.find(hero => hero.id === id)); //find will fetch 
                                                    //value of hero in such a way that 
                                                    // id in question should match with 
                                                    //hero in array list.
  }*/
  private log(message: string){
    this.messageService.addMessage('HeroService: ' + message);
  }

}
