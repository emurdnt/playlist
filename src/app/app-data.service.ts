import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IMusicData } from './music-data.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppDataService {
  $results?: Observable<IMusicData[]> = undefined;

  constructor(private HttpClient: HttpClient) {}

  getMusicData(term: string[]): Observable<IMusicData[]> {
    return (this.$results = this.HttpClient.get<IMusicData[]>(
      `https://itunes.apple.com/search?term=${term}&media=music&limit=20`
    ).pipe(catchError(this.handleError)));
  }

  private handleError(err: any) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is ${err.error.message}`;
    }

    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
