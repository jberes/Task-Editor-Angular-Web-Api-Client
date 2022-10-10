import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_ENDPOINT = 'https://localhost:7021';

@Injectable({
  providedIn: 'root'
})
export class TasksWebApiService {
  constructor(private http: HttpClient) { }

  public getApiTasks(): Observable<any> {
    return this.http.get(`${API_ENDPOINT}/api/tasks`);
  }
}
