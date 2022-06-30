import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddVolunteerComponent } from './add-volunteer/add-volunteer.component';
import { VOLUNTEER_ROUTE } from './volunteer-routing.module';
import { ListVolunteerComponent } from './list-volunteer/list-volunteer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';




@NgModule({
  declarations: [
    AddVolunteerComponent,
    ListVolunteerComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
    VOLUNTEER_ROUTE
  ]
})
export class VolunteerModule { }
