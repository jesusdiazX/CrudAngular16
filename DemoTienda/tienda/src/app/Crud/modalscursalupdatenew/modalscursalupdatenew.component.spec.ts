import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalscursalupdatenewComponent } from './modalscursalupdatenew.component';

describe('ModalscursalupdatenewComponent', () => {
  let component: ModalscursalupdatenewComponent;
  let fixture: ComponentFixture<ModalscursalupdatenewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalscursalupdatenewComponent]
    });
    fixture = TestBed.createComponent(ModalscursalupdatenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
