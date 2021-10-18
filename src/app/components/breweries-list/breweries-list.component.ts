import { Component, OnInit } from '@angular/core';
import { CrudService } from "../../shared/crud.service";

@Component({
  selector: 'app-breweries-list',
  templateUrl: './breweries-list.component.html',
  styleUrls: ['./breweries-list.component.scss']
})

export class BreweriesListComponent implements OnInit {

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

  constructor(
    public crudService: CrudService
  ) { }

  ngOnInit() {
    this.fetchUsers();
  }

  prevPage() {
    if (this.pageNumber > 0) {
      this.pageNumber = this.pageNumber - 1;
      this.paginationQuery(this.pageNumber);
      this.noMoreBreweries = false;
      this.isNextDisabled = false;
    } else {
      this.pageNumber = this.pageNumber;
    }
  }

  nextPage() {
    this.pageNumber = this.pageNumber + 1;
    this.paginationQuery(this.pageNumber);
  }

  paginationQuery(pageNumber:number) {
    this.fetchByPage(pageNumber);
  }

  // Service calls
  fetchByPage(pageNumber: number) {
    return this.crudService.getBreweryByPageOnly(pageNumber).subscribe((res: {}) => {
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

  fetchUsers() {
    return this.crudService.getBreweries().subscribe((res: {}) => {
      this.Breweries = res;
      this.showResults = true;
    })
  }
}
