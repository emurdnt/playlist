import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
// import { iPlaylist, selectCount } from '../../store/playlist.reducers';
import { Observable, map, tap } from 'rxjs';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.scss',
})
export class PlaylistComponent implements OnInit {
  counter!: any;
  message$?: Observable<any> = undefined;
  constructor(
    private store: Store<{
      playlistCounter: { count: number; message: string };
    }>
  ) {}

  ngOnInit(): void {
    this.store.select('playlistCounter').subscribe((data) => {
      this.counter = data.count;
    });

    this.message$ = this.store
      .select('playlistCounter')
      .pipe(map((data) => data.message));
  }
}
