/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Categories_with_apiService } from '../Componets/categories_with_api.service';

describe('Service: Categories_with_api', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Categories_with_apiService]
    });
  });

  it('should ...', inject([Categories_with_apiService], (service: Categories_with_apiService) => {
    expect(service).toBeTruthy();
  }));
});
