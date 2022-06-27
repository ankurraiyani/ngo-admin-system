import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddVolunteerComponent } from './add-volunteer/add-volunteer.component';
import { VOLUNTEER_ROUTE } from './volunteer-routing.module';
import { ListVolunteerComponent } from './list-volunteer/list-volunteer.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AddVolunteerComponent,
    ListVolunteerComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VOLUNTEER_ROUTE
  ]
})
export class VolunteerModule { }
