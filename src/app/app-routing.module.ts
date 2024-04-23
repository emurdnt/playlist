import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LookupComponent } from './pages/lookup/lookup.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';

const routes: Routes = [
  { path: 'app-lookup', component: LookupComponent },
  { path: 'app-playlist', component: PlaylistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
