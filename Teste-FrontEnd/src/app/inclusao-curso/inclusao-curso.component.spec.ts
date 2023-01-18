import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InclusaoCursoComponent } from './inclusao-curso.component';

describe('InclusaoCursoComponent', () => {
  let component: InclusaoCursoComponent;
  let fixture: ComponentFixture<InclusaoCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InclusaoCursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InclusaoCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
