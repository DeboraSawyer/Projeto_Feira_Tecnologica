/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:3000'; // URL do seu servidor Node.js

  constructor(private http: HttpClient) { }

  getDados(): Observable<any> {
    return this.http.get(`${this.apiUrl}/endpoint`);
  }

  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/tasks`);
  }

  addTask(task: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/tasks`, task);
  }
}*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000'; // 3000 URL do servidor Node.js.

  constructor(private http: HttpClient) { }

  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/tasks`);
  }

  addTask(task: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/tasks`, task);
  }

  addPsicologo(psicologo: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/psicologos`, psicologo);
  }
}