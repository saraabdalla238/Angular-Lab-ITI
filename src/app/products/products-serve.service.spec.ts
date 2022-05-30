import { TestBed } from '@angular/core/testing';

import { ProductsServeService } from './products-serve.service';

describe('ProductsServeService', () => {
  let service: ProductsServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
