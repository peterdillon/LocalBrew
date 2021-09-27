import { Injectable } from '@angular/core';

import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Brewery {
  id: string = '';
  name: string = '';
  email: string = '';
  phone: number = 0;
}

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  // REST API
  // endpoint = 'http://localhost:3000';
  // endpoint = 'https://jsonplaceholder.typicode.com';
  endpoint = 'https://api.openbrewerydb.org';
  city = '?by_city=Stevens';
  page = '?page=2';



  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getBreweries(): Observable<Brewery> {
    return this.httpClient.get<Brewery>(this.endpoint + '/breweries')
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  // https://api.openbrewerydb.org/breweries/search?query=sad&per_page=5
  
  getBreweryByPage(query: any, pageNumber: any): Observable<Brewery> {
    return this.httpClient.get<Brewery>(this.endpoint + '/breweries/search?query=' + query + '&page=' + pageNumber + '&per_page=5')
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

//https://api.openbrewerydb.org/breweries/search?query=hello
  getBreweryByQuery(query: any): Observable<Brewery> {
    return this.httpClient.get<Brewery>(this.endpoint + '/breweries/search?query=' + query + '&per_page=5')
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  // getBreweryByPage(query: any): Observable<Brewery> {
  //   return this.httpClient.get<Brewery>(this.endpoint + '/breweries/' + query + '&per_page=5')
  //   .pipe(
  //     retry(1),
  //     catchError(this.processError)
  //   )
  // }

  // getBreweryByCity(city: any): Observable<Brewery> {
  //   return this.httpClient.get<Brewery>(this.endpoint + '/breweries/' + city)
  //   .pipe(
  //     retry(1),
  //     catchError(this.processError)
  //   )
  // }

//   getSingleUser(id): Observable<User> {
//     return this.httpClient.get<User>(this.endpoint + '/users/' + id)
//     .pipe(
//       retry(1),
//       catchError(this.processError)
//     )
//   }  

//   addUser(data): Observable<User> {
//     return this.httpClient.post<User>(this.endpoint + '/users', JSON.stringify(data), this.httpHeader)
//     .pipe(
//       retry(1),
//       catchError(this.processError)
//     )
//   }  

//   updateUser(id, data): Observable<User> {
//     return this.httpClient.put<User>(this.endpoint + '/users/' + id, JSON.stringify(data), this.httpHeader)
//     .pipe(
//       retry(1),
//       catchError(this.processError)
//     )
//   }

//   deleteUser(id){
//     return this.httpClient.delete<User>(this.endpoint + '/users/' + id, this.httpHeader)
//     .pipe(
//       retry(1),
//       catchError(this.processError)
//     )
//   }

  processError(err: any) {
     let message = '';
     if(err.error instanceof ErrorEvent) {
      message = err.error.message;
     } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
     }
     console.log(message);
     return throwError(message);
  }
  
}