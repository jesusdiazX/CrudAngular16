import { TestBed } from '@angular/core/testing';

import { CrTiendaService } from './cr-tienda.service';

describe('CrTiendaService', () => {
  let service: CrTiendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrTiendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
