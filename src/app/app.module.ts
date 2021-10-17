import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ChipsModule } from 'primeng/chips';
import { TableModule } from 'primeng/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreweriesListComponent } from './components/breweries-list/breweries-list.component';
import { SearchComponent } from './components/search/search.component';
import { SearchLocationComponent } from './components/search-location/search-location.component';
import { HomeComponent } from './components/home/home.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { Utils } from './shared/utils';

@NgModule({
  declarations: [
    AppComponent,
    BreweriesListComponent,
    SearchComponent,
    SearchLocationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    ChipsModule,
    TableModule
  ],
  providers: [
    Utils
  ],
  bootstrap: [AppComponent],
  entryComponents: [SpinnerComponent]
})
export class AppModule { }
