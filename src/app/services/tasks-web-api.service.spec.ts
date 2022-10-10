import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TasksWebApiService } from './tasks-web-api.service';

describe('TasksWebApiService', () => {
  let service: TasksWebApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TasksWebApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
