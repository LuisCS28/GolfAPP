import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { ReglamentoComponent } from './reglamento/reglamento.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { ClimaComponent } from './clima/clima.component';
import { NgCalendarModule  } from 'ionic2-calendar';
import { Calendariocomponent } from './calendario/calendario.component';




@NgModule({
  declarations: [
    HomeComponent,
    PerfilComponent,
    ReglamentoComponent,
    TarjetaComponent,
    ClimaComponent,
    Calendariocomponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonicModule,
    ComponentsModule,
    NgCalendarModule,
  ],
  exports:[
    ClimaComponent
  ]
})
export class PagesModule { }
