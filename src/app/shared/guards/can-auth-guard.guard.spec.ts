import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { canAuthGuard } from './can-auth.guard';

describe('canAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => canAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
