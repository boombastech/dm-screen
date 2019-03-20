import { TestBed } from '@angular/core/testing';

import { AuthenticationFirebaseService } from './authentication-firebase.service';

describe('AuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticationFirebaseService = TestBed.get(AuthenticationFirebaseService);
    expect(service).toBeTruthy();
  });
});
