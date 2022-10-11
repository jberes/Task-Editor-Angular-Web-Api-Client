import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TasksWebApiService } from '../services/tasks-web-api.service';
import { Task, TaskNN } from '../models/tasks.model'
import { IGridEditDoneEventArgs, IgxGridComponent, IgxSnackbarComponent, IRowDataEventArgs } from 'igniteui-angular';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-grid-crud',
  templateUrl: './grid-crud.component.html',
  styleUrls: ['./grid-crud.component.scss']
})
export class GridCrudComponent implements OnInit {
  public tasksWebApiApiTasks!: Task[];

  @ViewChild(IgxGridComponent) public grid!: IgxGridComponent
  @ViewChild(IgxSnackbarComponent) public snackbar!: IgxSnackbarComponent

  constructor(
    private tasksWebApiService: TasksWebApiService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.tasksWebApiService.getApiTasks().subscribe(data => this.tasksWebApiApiTasks = data);
  }

  async rowAdded(event: IRowDataEventArgs) {

    var newTask = await this.tasksWebApiService.addTask(event.data);
    console.log('This is the New Task ID: ' + newTask.taskId);
    console.log('This is the New Task: ' + newTask);
    console.log('This is the New Task ID Stringify: ' + JSON.stringify(newTask));
    
    console.log("Type Is: " + typeof newTask);
    // var t = new Task();
    // t.taskId = newTask.taskID;
    // t.assignedToEmail = newTask.assignedToEmail;
    // t.dateAdded = newTask.dateAdded;
    // t.dateDue = newTask.dateDue;
    // t.dateUpdated = newTask.dateUpdated;
    // t.projectId = newTask.projectID;
    // t.taskName = newTask.taskName;
    // t.priority = newTask.priority;

    // console.log("T is : " + JSON.stringify(t));

    this.grid.updateRow(newTask, event.data.taskId);
  }

  async rowDeleted(event: IRowDataEventArgs) {
    await this.tasksWebApiService.deleteTask(event.data)
  }

  async rowEdited(event: IGridEditDoneEventArgs) {
    if (!event.isAddRow) {
      await this.tasksWebApiService.updateTask(event.newValue);
    }
  }

}
