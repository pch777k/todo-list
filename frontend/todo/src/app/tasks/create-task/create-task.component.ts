import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  tasks: Task[] = [];
  task = {
    id: null,
    title: '',
    createOn: new Date(),
    completed: false,
  };
  submitted = false;

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    }
  }

  saveTask() {
    const data = {
      id: this.task.id,
      title: this.task.title,
      createOn: this.task.createOn,
      completed: this.task.completed
    };

    this.taskService.postTask(data)
      .subscribe(
        res => {
          console.log(res);
          this.submitted = true;
          data.id = res.id;
          this.tasks.push(data);

        },
        error => {
          console.log(error);
        });
  }

  newTask() {
    this.submitted = false;
    this.task = {
      id: null,
      title: '',
      createOn: new Date(),
      completed: false
    };
  }

  /*  saveTask() {
    this.taskService.postTask(this.newTask)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  } */


  /* saveNewTodo(todo: Todo) {
    this.http.post<Todo>("/todos", todo).subscribe(response => {
      console.log(response);
      this.todos.push(response)
    });
  } */

}
