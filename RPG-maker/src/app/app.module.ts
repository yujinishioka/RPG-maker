import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PersonagensComponent } from './components/personagens/personagens.component';
import { PersonagemDetalhesComponent } from './components/personagens/info/info.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MensagensComponent } from './components/mensagens/mensagens.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonagensComponent,
    PersonagemDetalhesComponent,
    DashboardComponent,
    MensagensComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
