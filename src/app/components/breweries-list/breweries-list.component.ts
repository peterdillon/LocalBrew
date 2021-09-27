import { Component, OnInit } from '@angular/core';
import { CrudService } from "../../shared/crud.service";

@Component({
  selector: 'app-breweries-list',
  templateUrl: './breweries-list.component.html',
  styleUrls: ['./breweries-list.component.scss']
})

export class UsersListComponent implements OnInit {

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
      console.log(this.Breweries);
    })
  }

  // delete(id) {
  //   if (window.confirm('Really?')){
  //     this.crudService.deleteUser(id).subscribe(res => {
  //       this.fetchUsers()
  //     })
  //   }
  // }

}