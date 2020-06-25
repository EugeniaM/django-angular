import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { ApiService } from '../api.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<Task[]>;
  taskForm: FormGroup;

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getTasks();
    this.initTaskForm();
  }

  public getTasks(): void {
    this.tasks$ = this.apiService.getTasks();
  }

  public onSubmit() {
    this.apiService.postTask(this.taskForm.value)
      .subscribe(
        (response: Task) => {
          console.log(response);
          this.taskForm.reset();
          this.getTasks();
        }
      );
  }

  public deleteTask(taskId: number): void {
    this.apiService.deleteTask(taskId)
      .subscribe(
        (response) => {
          console.log(response);
          this.getTasks();
        }
      );
  }

  public updateTask(task: Task): void {
    this.apiService.putTask(task)
      .subscribe(
        (response) => {
          console.log(response);
          this.getTasks();
        }
      );
  }

  private initTaskForm() {
    this.taskForm = this.formBuilder.group({
      title: '',
      content: ''
    });

    // tslint:disable:no-string-literal
    this.taskForm.controls['title'].setValidators([Validators.required]);
    this.taskForm.controls['content'].setValidators([Validators.required]);
  }
}
