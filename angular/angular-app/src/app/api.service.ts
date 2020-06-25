import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Task } from './task';
import { AuthService } from './auth/auth.service';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private API_URL = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  public getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.API_URL}/task/`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.accessToken}`)
    });
  }

  public postTask(newTask: Task): Observable<Task> {
    return this.http.post<Task>(`${this.API_URL}/task/`, newTask, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.accessToken}`)
    });
  }

  public putTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.API_URL}/task/${task.id}/`, task, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.accessToken}`)
    });
  }

  public deleteTask(taskId: number) {
    return this.http.delete(`${this.API_URL}/task/${taskId}/`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.accessToken}`)
    });
  }
}
