import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-integrante',
  templateUrl: './integrante.component.html',
  styleUrls: ['./integrante.component.scss']
})
export class IntegranteComponent implements OnInit {

  @Input() nombre:String = "Nombre";
  @Input() genero:String = "sin asignar";
  @Input() edad:Number = 0;
  @Input() escuela:String = "Escuela";


  constructor() { }

  ngOnInit(): void {
  }

}
