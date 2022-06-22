import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEventComponent } from '../add-event/add-event.component';
import { ListEventComponent } from '../list-event/list-event.component';



@NgModule({
  declarations: [AddEventComponent,ListEventComponent],
  imports: [
    CommonModule
  ]
})
export class EventModule { }
