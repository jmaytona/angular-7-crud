import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Schedule } from '../components/models/Schedule'
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  scheduleUrl:string = 'https://jsonplaceholder.typicode.com/posts';
  scheduleLimit:string = '?_limit=5';

  constructor(private http:HttpClient) { }

  getSchedule():Observable<Schedule[]>{
    return this.http.get<Schedule[]>(`${this.scheduleUrl}${this.scheduleLimit}`);
  }

  //Toggle Completed
  toggleCompleted(x: Schedule):Observable<any> {
    const url = `${this.scheduleUrl}/${x.id}`;
    return this.http.put(url, x, httpOptions);
  }

  //Delet button method
  deleteSchedServer(x: Schedule):Observable<Schedule[]> {
    const url = `${this.scheduleUrl}/${x.id}`;
    return this.http.delete<Schedule[]>(url, httpOptions);
  }

  addSchedServer(x: Schedule):Observable<Schedule[]> {
    return this.http.post<Schedule[]>(this.scheduleUrl, x , httpOptions);
  }
}
