import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './components/booking/booking.component';
import { MatComponentsComponent } from './components/mat-components/mat-components.component';
import { StepperTaskComponent } from './components/stepper-task/stepper-task.component';

const routes: Routes = [
  {
    path:'booking', component:BookingComponent
  },
  {
    path:'mat-components', component:MatComponentsComponent
  },
  {
    path:'stepper-task', component:StepperTaskComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
