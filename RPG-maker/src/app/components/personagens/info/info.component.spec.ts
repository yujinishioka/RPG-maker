import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagemDetalhesComponent } from './info.component';

describe('PersonagemDetalhesComponent', () => {
  let component: PersonagemDetalhesComponent;
  let fixture: ComponentFixture<PersonagemDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonagemDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonagemDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
