import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetaproductoComponent } from './targetaproducto.component';

describe('TargetaproductoComponent', () => {
  let component: TargetaproductoComponent;
  let fixture: ComponentFixture<TargetaproductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TargetaproductoComponent]
    });
    fixture = TestBed.createComponent(TargetaproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
