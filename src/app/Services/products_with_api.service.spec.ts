/* tslint:disable:no-unused-variable */

import { TestBed,  inject } from '@angular/core/testing';
import { Products_with_apiService } from './products_with_api.service';

describe('Service: Products_with_api', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Products_with_apiService]
    });
  });

  it('should ...', inject([Products_with_apiService], (service: Products_with_apiService) => {
    expect(service).toBeTruthy();
  }));
});
