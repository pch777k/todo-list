import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {
  tasks: Task[] = [];
  faSquare = faSquare;
  faCheckSquare = faCheckSquare;
  faTrashAlt = faTrashAlt;
  faEdit = faEdit;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getAllTasks();
  }

  public getAllTasks() {
    this.taskService.getAllTasks().subscribe(
      res => {
        this.tasks = res;
      },
      err => {
        alert('An error has occured');
      }

    );
  }

 /*  updateTodo(todo: Todo): void {
    let uri = `/todos/${todo.id}`;
    this.http.put(uri, todo).subscribe(result => {
      console.log(result);
    });
  } */
  public updateTask(updatedTask: Task) {
    this.taskService.updateTask(updatedTask).subscribe(
      res => {
      },
      err => {
        alert('An error has occured while update Category');
      }
    );
  }
  taskCompleted(index: number, isComplete: boolean): void {
    const task = this.tasks[index];
    task.completed = isComplete;
    this.updateTask(task);
  }

  public deleteTask(task: Task) {
    if (confirm('Czy chcesz usunąć zadanie?')) {
      this.taskService.deleteTask(task.id).subscribe(
        res => {
          const indexOfTask = this.tasks.indexOf(task);
          this.tasks.splice(indexOfTask, 1);
        },
        err => {
          alert('An error has occured while delete Task');
        }
      );
    }
  }

  /* deleteTask(index: number): void {
    let task = this.tasks[index];
    let uri = `/tasks/${task.id}`;
    this.http.delete(uri).subscribe(result => {
      this.tasks.splice(index, 1);
    });
  } */
}
