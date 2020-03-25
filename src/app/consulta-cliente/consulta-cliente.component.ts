import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-consulta-cliente',
  templateUrl: './consulta-cliente.component.html',
  styleUrls: ['./consulta-cliente.component.scss']
})
export class ConsultaClienteComponent implements OnInit {

  /**
   * Texto a mostrar en el titulo de la pagina
   */
  @Input() titulo = '';

  public options = [
    { id: 1, name: 'Número de Cliente' },
    { id: 2, name: 'Número de Tarjeta' },
    { id: 3, name: 'Número de Cuenta'  },
  ];

  constructor() { }

  ngOnInit() {
  }

}
