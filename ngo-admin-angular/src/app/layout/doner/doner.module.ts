import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDonerComponent } from './add-doner/add-doner.component';
import { DONER_ROUTE } from './doner-routing.module';
import { ListDonerComponent } from './list-doner/list-doner.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddDonerComponent,
    ListDonerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DONER_ROUTE
  ]
})
export class DonerModule { }
