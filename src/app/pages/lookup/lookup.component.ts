import { Component } from '@angular/core';
import {
  Observable,
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  startWith,
  switchMap,
  tap,
  throwError,
} from 'rxjs';

import { FormControl } from '@angular/forms';
import { IMusicData } from '../../music-data.interface';
import { AppDataService } from '../../app-data.service';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrl: './lookup.component.scss',
})
export class LookupComponent {
  loading: boolean = false;
  albumChosen: IMusicData = {
    trackName: '',
    artistId: '',
    artistName: '',
    trackViewUrl: '',
    artworkUrl100: '',
    primaryGenreName: '',
  };
  searchResults$?: Observable<IMusicData[]> = undefined;
  searchInput = new FormControl('');

  constructor(private apiDataService: AppDataService) {}

  ngOnInit(): void {
    this.searchResults$ = this.searchInput.valueChanges.pipe(
      startWith('The Weeknd'),
      debounceTime(100),
      distinctUntilChanged(),
      tap(() => (this.loading = true)),
      switchMap((term: any) => {
        return this.apiDataService.getMusicData(term);
      }),
      map((results: any) => {
        return results.results.map((data: IMusicData) => {
          this.loading = false;
          return {
            trackName: data.trackName,
            artistName: data.artistName,
            trackViewUrl: data.trackViewUrl,
            artworkUrl100: data.artworkUrl100,
            artistId: data.artistId,
            primaryGenreName: data.primaryGenreName,
          };
        });
      }),
      tap((data) => console.log(data)),
      catchError(this.handleError)
    );
  }

  handleButtonClick(musicDetails: IMusicData) {
    this.albumChosen = musicDetails;
  }

  handleError(err: any) {
    console.log(err);
    return throwError(err);
  }
}
