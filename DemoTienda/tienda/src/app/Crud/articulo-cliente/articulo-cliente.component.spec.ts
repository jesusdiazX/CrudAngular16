import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloClienteComponent } from './articulo-cliente.component';

describe('ArticuloClienteComponent', () => {
  let component: ArticuloClienteComponent;
  let fixture: ComponentFixture<ArticuloClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticuloClienteComponent]
    });
    fixture = TestBed.createComponent(ArticuloClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
