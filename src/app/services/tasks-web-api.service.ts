import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';
import { Task } from '../models/tasks.model';

const API_ENDPOINT = 'https://localhost:7021/api';

@Injectable({
  providedIn: 'root'
})
export class TasksWebApiService {
  constructor(private http: HttpClient) { }

  public getApiTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${API_ENDPOINT}/tasks`);
  }

public getTasks(): Observable<Task[]> {
return this.http.get<Task[]>(`API_ENDPOINT/tasks`);
}

  public async addTask(task: Task): Promise<Task> {
    var headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    var body = JSON.stringify(task);
    return await firstValueFrom(this.http.post<Task>(`${API_ENDPOINT}/task_sp/`, body, { headers }));    
  }

  public async updateTask(task: Task): Promise<Task> {
    var headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    var body = JSON.stringify(task);
    return await firstValueFrom(this.http.put<Task>(`${API_ENDPOINT}/task_sp/`, body, { headers }));
  }

  public async deleteTask(task: Task): Promise<Task> {
    return await firstValueFrom(this.http.delete<Task>(`${API_ENDPOINT}/task_sp/${task.taskId}`));
  }
}
