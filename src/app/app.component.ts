import { Component } from '@angular/core';
import { Spinkit } from 'ng-http-loader';
import { SpinnerComponent } from './shared/spinner/spinner.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  spinnerStyle = Spinkit;
  public spinnerComponent = SpinnerComponent;
}
