import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Home', icon: 'Home' },
    { title: 'Info', url: '/folder/Giannakos Stefanos Panagiotis 3568, Giatagana Despoina 3305. Navrozidou Eleni 3628, Stamoglou Evaggelia 3591', icon: 'information' },
    
  ];
  constructor() {}
}
