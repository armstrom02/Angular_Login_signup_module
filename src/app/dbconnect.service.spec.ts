import { TestBed, inject } from '@angular/core/testing';

import { DbconnectService } from './dbconnect.service';

describe('DbconnectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DbconnectService]
    });
  });

  it('should be created', inject([DbconnectService], (service: DbconnectService) => {
    expect(service).toBeTruthy();
  }));
});
