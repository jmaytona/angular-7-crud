import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleComponent } from '../app/components/schedule/schedule.component'
import { AboutComponent } from '../app/components/pages/about/about.component'

const routes: Routes = [
  { path: '', component: ScheduleComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
