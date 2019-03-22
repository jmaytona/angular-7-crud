import { Component, OnInit } from '@angular/core';
import { Schedule } from '../models/Schedule';
import { ScheduleService } from '../../services/schedule.service'

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  sched:Schedule[];

  constructor(private schedService:ScheduleService) { }

  ngOnInit() {
    this.schedService.getSchedule().subscribe(sched => {
      this.sched = sched;
    });
    
  }

  deleteSched(x:Schedule) {
    //Remove from UI
    this.sched = this.sched.filter(s => s.id !== x.id);
    //Remove from Server
    this.schedService.deleteSchedServer(x).subscribe();
  }

  addSched(x:Schedule) {
    this.schedService.addSchedServer(x).subscribe(x => {
      this.sched.push(x);
    });
  }

}
