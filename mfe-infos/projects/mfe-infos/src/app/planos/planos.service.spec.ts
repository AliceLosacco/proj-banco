/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlanosService } from './planos.service';

describe('Service: Planos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanosService]
    });
  });

  it('should ...', inject([PlanosService], (service: PlanosService) => {
    expect(service).toBeTruthy();
  }));
});
