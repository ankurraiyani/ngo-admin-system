import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEventComponent } from './list-event/list-event.component';
import { AddEventComponent } from './add-event/add-event.component';
import { EVENT_ROUTE } from './event-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [ListEventComponent,AddEventComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
    NgSelectModule,
    EVENT_ROUTE
  ]
})
export class EventModule { }
