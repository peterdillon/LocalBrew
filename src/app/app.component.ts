import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Spinkit } from 'ng-http-loader';
import { SpinnerComponent } from './shared/spinner/spinner.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor( public router: Router ) {}
  
  spinnerStyle = Spinkit;
  public spinnerComponent = SpinnerComponent;
}
