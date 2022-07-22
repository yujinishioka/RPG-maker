import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ApiService } from 'src/app/services/api.service';
import { AppComponent } from './app.component';
import { PersonagensComponent } from './components/personagens/personagens.component';
import { PersonagemInfoComponent } from './components/personagens/info/info.component';
import { PersonagemEditarComponent } from './components/personagens/info/editar/editar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonagensComponent,
    PersonagemInfoComponent,
    PersonagemEditarComponent,
    DashboardComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
