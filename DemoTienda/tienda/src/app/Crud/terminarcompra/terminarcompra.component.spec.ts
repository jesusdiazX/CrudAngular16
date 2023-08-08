import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminarcompraComponent } from './terminarcompra.component';

describe('TerminarcompraComponent', () => {
  let component: TerminarcompraComponent;
  let fixture: ComponentFixture<TerminarcompraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TerminarcompraComponent]
    });
    fixture = TestBed.createComponent(TerminarcompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
