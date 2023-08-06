import { TestBed } from '@angular/core/testing';

import { ServiceArticuloService } from './service-articulo.service';

describe('ServiceArticuloService', () => {
  let service: ServiceArticuloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceArticuloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
