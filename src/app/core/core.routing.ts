import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
//Componentes
import { CoreComponent } from "./core.component";
import { BinvenidaComponent } from "./binvenida/binvenida.component";
import { GrupoFamiliarComponent } from "./grupo-familiar/grupo-familiar.component";


const routes : Routes = [
  {path:'core',component:CoreComponent, 
        children:[
          {path:'',component:BinvenidaComponent},
          {path:'grupoFamiliar', component:GrupoFamiliarComponent}
        ]}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }