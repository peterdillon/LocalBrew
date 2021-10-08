import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreweriesListComponent } from './components/breweries-list/breweries-list.component';
import { SearchComponent } from './components/search/search.component';
import { SearchLocationComponent } from './components/search-location/search-location.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'list', component: BreweriesListComponent },
  { path: 'search', component: SearchComponent },
  { path: 'search-location', component: SearchLocationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }