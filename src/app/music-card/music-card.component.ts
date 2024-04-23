import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IMusicData } from '../music-data.interface';
import { Store } from '@ngrx/store';
import { add, transport } from '../store/playlist.actions';

@Component({
  selector: 'music-card',
  templateUrl: './music-card.component.html',
  styleUrl: './music-card.component.scss',
})
export class MusicCardComponent {
  @Input() result?: IMusicData = {
    trackName: '',
    artistId: '',
    artistName: '',
    trackViewUrl: '',
    artworkUrl100: '',
    primaryGenreName: '',
  };

  @Output() clickedItem: EventEmitter<IMusicData> =
    new EventEmitter<IMusicData>();
  //input is a single result
  //there's no output

  constructor(private store: Store<{ playlistCounter: { count: number } }>) {}

  onClick(): void {
    console.log('WTF');
    this.store.dispatch(add());
    this.store.dispatch(transport({ message: 'SUCCESS???' }));
    this.clickedItem.emit(this.result);
  }
}
