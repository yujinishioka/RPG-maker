import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PersonagensComponent } from './components/personagens/personagens.component';
import { PersonagemDetalhesComponent } from './components/personagens/info/info.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'personagens', component: PersonagensComponent },
  { path: 'detalhes/:id', component: PersonagemDetalhesComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
