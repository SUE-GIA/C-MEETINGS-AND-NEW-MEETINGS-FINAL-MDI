import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Home', icon: 'Home' },
    { title: 'Info', url: '/folder/Info', icon: 'information' },
    
  ];
  constructor() {}
}
