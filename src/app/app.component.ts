import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  public options = [
    { id: 1, name: 'Número de Cliente' },
    { id: 2, name: 'Número de Tarjeta' },
    { id: 3, name: 'Número de Cuenta'  },
  ];

}
