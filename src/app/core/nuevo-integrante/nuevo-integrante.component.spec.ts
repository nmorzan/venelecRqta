import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoIntegranteComponent } from './nuevo-integrante.component';

describe('NuevoIntegranteComponent', () => {
  let component: NuevoIntegranteComponent;
  let fixture: ComponentFixture<NuevoIntegranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoIntegranteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoIntegranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
