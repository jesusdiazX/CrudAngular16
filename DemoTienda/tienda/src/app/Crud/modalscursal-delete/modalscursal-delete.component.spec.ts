import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalscursalDeleteComponent } from './modalscursal-delete.component';

describe('ModalscursalDeleteComponent', () => {
  let component: ModalscursalDeleteComponent;
  let fixture: ComponentFixture<ModalscursalDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalscursalDeleteComponent]
    });
    fixture = TestBed.createComponent(ModalscursalDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
