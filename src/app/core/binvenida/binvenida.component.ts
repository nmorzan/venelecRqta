import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-binvenida',
  templateUrl: './binvenida.component.html',
  styleUrls: ['./binvenida.component.scss']
})
export class BinvenidaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public navegar(){
    this.router.navigateByUrl('core/grupoFamiliar')
  }

}
