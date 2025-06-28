import { TestBed } from '@angular/core/testing';

import { Empservive } from './empservive';

describe('Empservive', () => {
  let service: Empservive;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Empservive);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
