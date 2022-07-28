import { Personagem } from '../../models/personagem';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  personagens: Personagem[] = [];

  constructor() { }

  ngOnInit(): void {}
}
