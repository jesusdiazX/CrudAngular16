import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalArticulosComponent } from './modal-articulos.component';

describe('ModalArticulosComponent', () => {
  let component: ModalArticulosComponent;
  let fixture: ComponentFixture<ModalArticulosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalArticulosComponent]
    });
    fixture = TestBed.createComponent(ModalArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
