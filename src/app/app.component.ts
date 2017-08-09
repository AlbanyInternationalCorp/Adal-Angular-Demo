import { Component } from '@angular/core';
import { AdalProvider } from "adal-angular-ts";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private adalConfig: AdalProvider){
    this.adalConfig.login();
  }
}
