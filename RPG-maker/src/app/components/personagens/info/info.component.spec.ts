import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagemInfoComponent } from './info.component';

describe('PersonagemInfoComponent', () => {
  let component: PersonagemInfoComponent;
  let fixture: ComponentFixture<PersonagemInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonagemInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonagemInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
