import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTasksComponent } from './tasks/list-tasks/list-tasks.component';
import { CreateTaskComponent } from './tasks/create-task/create-task.component';



const routes: Routes = [
  { path: 'tasks', component: ListTasksComponent },
  { path: 'create', component: CreateTaskComponent },
  { path: '', component: ListTasksComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
