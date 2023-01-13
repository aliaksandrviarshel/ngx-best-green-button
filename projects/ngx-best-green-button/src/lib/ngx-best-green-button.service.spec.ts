import { TestBed } from '@angular/core/testing';

import { NgxBestGreenButtonService } from './ngx-best-green-button.service';

describe('NgxBestGreenButtonService', () => {
  let service: NgxBestGreenButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxBestGreenButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
