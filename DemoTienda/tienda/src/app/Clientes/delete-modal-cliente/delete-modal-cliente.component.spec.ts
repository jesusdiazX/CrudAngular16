import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteModalClienteComponent } from './delete-modal-cliente.component';

describe('DeleteModalClienteComponent', () => {
  let component: DeleteModalClienteComponent;
  let fixture: ComponentFixture<DeleteModalClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteModalClienteComponent]
    });
    fixture = TestBed.createComponent(DeleteModalClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
