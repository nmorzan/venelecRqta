import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
//modules
import { SkeletonModule } from '../skeleton/skeleton.module';
import { SharedModule } from '../shared/shared.module';
import { BinvenidaComponent } from './binvenida/binvenida.component';
import { GrupoFamiliarComponent } from './grupo-familiar/grupo-familiar.component';
import { NuevoIntegranteComponent } from './nuevo-integrante/nuevo-integrante.component';



@NgModule({
  declarations: [
    CoreComponent,
    BinvenidaComponent,
    GrupoFamiliarComponent,
    NuevoIntegranteComponent
  ],
  imports: [
    CommonModule,
    SkeletonModule,
    SharedModule
  ]
})
export class CoreModule { }
