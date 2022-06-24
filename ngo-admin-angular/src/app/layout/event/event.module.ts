import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEventComponent } from './list-event/list-event.component';
import { AddEventComponent } from './add-event/add-event.component';
import { EVENT_ROUTE } from './event-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ListEventComponent,AddEventComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EVENT_ROUTE
  ]
})
export class EventModule { }
