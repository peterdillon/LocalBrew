import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreweryService } from "../../shared/brewery.service";
import { GeolocationService } from '@ng-web-apis/geolocation';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search-location.component.html'
})

export class SearchLocationComponent implements OnInit  {

  Breweries: any = [];
  pageNumber: number = 1;
  isNextDisabled: boolean = false;
  isPrevDisabled: boolean = true;
  showResults: boolean = false;
  hasError: boolean = false;
  noMoreBreweries: boolean = false;
  latitude: number = 0;
  longitude: number = 0;
  gettingGeoLocation: boolean = true;
  error: any;
  locationError: boolean = false;

  constructor( 
    public breweryService: BreweryService,
    private readonly geolocation$: GeolocationService ) {}

  ngOnInit(): void {
    this.geolocation$.pipe(take(1)).subscribe(
      position => 
      { this.getByLocation(position.coords.latitude, position.coords.longitude, this.pageNumber),
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.gettingGeoLocation = false;
      },
      error => {
        this.error = error;
        this.locationError = true;
    });
  }

  prevPage() {
    if (this.pageNumber > 0) {
      this.pageNumber = this.pageNumber - 1;
      this.paginationQuery(this.latitude, this.longitude, this.pageNumber);
      this.noMoreBreweries = false;
      this.isNextDisabled = false;
    } else {
      this.pageNumber = this.pageNumber;
    }
  }

  nextPage() {
    this.pageNumber = this.pageNumber + 1;
    this.getByLocation(this.latitude, this.longitude, this.pageNumber);
  }

  paginationQuery(latitude: any, longitude: any, pageNumber: number) {
    this.getByLocation(this.latitude, this.longitude, this.pageNumber);
  }

  // Service calls  
  getByLocation(latitude: any, longitude: any, pageNumber: any) {
    return this.breweryService.getBreweryByLocation(latitude, longitude, pageNumber).subscribe((res: {}) => {
      this.Breweries = res;
      if (this.Breweries?.length) {
        this.hasError = false;
        this.showResults = true;
      } else if (!this.Breweries?.length) {
        this.isNextDisabled = true;
        this.noMoreBreweries = true;
      }
      if (this.pageNumber >= 2) {
        this.isPrevDisabled = false;
      } else {
        this.isPrevDisabled = true;
      }
    })
  }
}
