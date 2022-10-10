import { Component, OnInit } from '@angular/core';
import { TasksWebApiService } from '../services/tasks-web-api.service';

@Component({
  selector: 'app-grid-crud',
  templateUrl: './grid-crud.component.html',
  styleUrls: ['./grid-crud.component.scss']
})
export class GridCrudComponent implements OnInit {
  public tasksWebApiApiTasks: any = null;

  constructor(
    private tasksWebApiService: TasksWebApiService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.tasksWebApiService.getApiTasks().subscribe(data => this.tasksWebApiApiTasks = data);
  }
}
