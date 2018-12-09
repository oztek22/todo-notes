import { TestBed } from '@angular/core/testing';

import { NotificationOldService } from './notification-old.service';

describe('NotificationOldService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotificationOldService = TestBed.get(NotificationOldService);
    expect(service).toBeTruthy();
  });
});
