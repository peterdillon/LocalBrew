import { Component, OnInit } from '@angular/core';
import { CrudService } from "../../shared/crud.service";

@Component({
  selector: 'app-breweries-list',
  templateUrl: './breweries-list.component.html',
  styleUrls: ['./breweries-list.component.scss']
})

export class BreweriesListComponent implements OnInit {

  Breweries: any = [];

  constructor(
    public crudService: CrudService
  ) { }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    return this.crudService.getBreweries().subscribe((res: {}) => {
      this.Breweries = res;
    })
  }

}