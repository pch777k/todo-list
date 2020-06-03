import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private TASKS_URL = 'http://localhost:8080/api/tasks';

  constructor(private httpClient: HttpClient) { }

  getAllTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.TASKS_URL);
  }

  postTask(task: Task): Observable<Task>{
    return this.httpClient.post<Task>(this.TASKS_URL, task);
  }

  updateTask(updatedTask: Task): Observable<Task> {
    return this.httpClient.post<Task>(this.TASKS_URL, updatedTask);
  }

  deleteTask(id: number): Observable<any>{
    return this.httpClient.delete(`${this.TASKS_URL}/${id}`);
  }


}
