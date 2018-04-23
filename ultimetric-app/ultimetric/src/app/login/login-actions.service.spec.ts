import { TestBed, inject } from '@angular/core/testing';

import { LoginActionsService } from './login-actions.service';

describe('LoginActionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginActionsService]
    });
  });

  it('should be created', inject([LoginActionsService], (service: LoginActionsService) => {
    expect(service).toBeTruthy();
  }));
});
