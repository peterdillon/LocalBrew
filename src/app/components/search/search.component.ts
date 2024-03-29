import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreweryService } from "../../shared/brewery.service";
import { Utils } from '../../shared/utils';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit  {

  Breweries: any = [];
  pageNumber: number = 1;
  city: string = '';
  query: string = '';
  isNextDisabled: boolean = false;
  isPrevDisabled: boolean = true;
  showResults: boolean = false;
  hasError: boolean = false;
  noMoreBreweries: boolean = false;
  resultsTotal: number = 0;

  constructor( public breweryService: BreweryService,
               private utils: Utils ) {}

  ngOnInit(): void { }

  prevPage(val: string) {
    if (this.pageNumber > 0) {
      this.pageNumber = this.pageNumber - 1;
      this.paginationQuery(val, this.pageNumber);
      this.noMoreBreweries = false;
      this.isNextDisabled = false;
    } else {
      this.pageNumber = this.pageNumber;
    }
  }

  nextPage(val: string) {
    this.pageNumber = this.pageNumber + 1;
    this.paginationQuery(val, this.pageNumber);
  }

  checkKeyInput(e: any, val: string) {
    const x = this.utils.checkKeyPress(e, val);
    if(x) { this.searchByQuery(val); } 
  }

  searchByQuery(val:string) {
    this.fetchByQuery(val);
  }
  paginationQuery(val:string, pageNumber:number) {
    this.fetchByPage(val, pageNumber);
  }

  // Service calls
  fetchByPage(query: string, pageNumber: number) {
    return this.breweryService.getBreweryByPage(query, pageNumber).subscribe((res: {}) => {
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
  
  fetchByQuery(query: string) {
    return this.breweryService.getBreweryByQuery(query).subscribe((res: {}) => {
      this.Breweries = res;
      this.pageNumber = 1;
      this.noMoreBreweries = false;
      this.isNextDisabled = false;
      this.isPrevDisabled = true;
      if (this.Breweries?.length) {
        this.hasError = false;
        this.showResults = true;
      } else {
        this.hasError = true;
        this.showResults = false;
      }
    })
  }

}
