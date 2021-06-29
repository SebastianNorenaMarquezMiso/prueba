import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { TrackerService } from './tracker.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";
describe('Service: Tracker', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrackerService],
      imports: [
        HttpClientTestingModule,
    ],
    });
  });

  it('should ...', inject([TrackerService], (service: TrackerService) => {
    expect(service).toBeTruthy();
  }));
});
