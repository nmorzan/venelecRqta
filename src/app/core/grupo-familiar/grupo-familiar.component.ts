import { Component, OnInit } from '@angular/core';
import { integranteFamilia } from 'src/app/interfaces/integranteFamilia';

@Component({
  selector: 'app-grupo-familiar',
  templateUrl: './grupo-familiar.component.html',
  styleUrls: ['./grupo-familiar.component.scss']
})
export class GrupoFamiliarComponent implements OnInit {
  public grupoFamiliar: Array<integranteFamilia> = [
    {nombre:"Julián",edad:5,escuela:"Dante Aligieri",genero:"masculino"},
    {nombre:"Emilia",edad:9,escuela:"Normal",genero:"femenino"},
    {nombre:"Mariano",edad:17,escuela:"Industrial Avellaneda",genero:"masculino"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
