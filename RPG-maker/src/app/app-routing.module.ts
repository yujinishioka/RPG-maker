import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PersonagensComponent } from './components/personagens/personagens.component';
import { PersonagemInfoComponent } from './components/personagens/info/info.component';
import { PersonagemEditarComponent } from './components/personagens/info/editar/editar.component';
import { PersonagemNovoComponent } from './components/personagens/novo/novo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'personagens', component: PersonagensComponent },
  { path: 'personagens/:id', component: PersonagemInfoComponent },
  { path: 'personagens/:id/editar', component: PersonagemEditarComponent },
  { path: 'personagens/novo', component: PersonagemNovoComponent}
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
