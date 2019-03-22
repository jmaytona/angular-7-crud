import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ScheduleService } from '../../services/schedule.service'
import { Schedule } from 'src/app/components/models/Schedule';

@Component({
  selector: 'app-schedule-time',
  templateUrl: './schedule-time.component.html',
  styleUrls: ['./schedule-time.component.css']
})
export class ScheduleTimeComponent implements OnInit {
  @Input() sched:Schedule;
  @Output() deleteSched: EventEmitter<Schedule> = new EventEmitter();

  constructor(private schedService:ScheduleService) { }

  ngOnInit() {
  }

  //Set Dynamic Classes
  setClasses() {
    let classes = {
      'sched-design': true,
      'is-complete': this.sched.completed
    }
    return classes;
  }

  //On Toggle Method
  onToggle(a) {
    //Toggle on UI
    a.completed = !a.completed;

    //Toggle on Server
    this.schedService.toggleCompleted(this.sched).subscribe(todo => console.log(this.sched))
  }

  onDelete(b) {
    this.deleteSched.emit(b);  
  }

}
