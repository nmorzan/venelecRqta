import { NgModule } from '@angular/core';
//Components
import { IntegranteComponent } from './integrante/integrante.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { TitleComponent } from './title/title.component';



@NgModule({
  declarations: [
    HeaderComponent,
    IntegranteComponent,
    TitleComponent,
  ],
  exports:[
    HeaderComponent,
    IntegranteComponent,
    TitleComponent
  ],
  imports: [
    SharedModule
  ]
})
export class SkeletonModule { }
