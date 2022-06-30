import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDonerComponent } from './add-doner/add-doner.component';
import { DONER_ROUTE } from './doner-routing.module';
import { ListDonerComponent } from './list-doner/list-doner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AddDonerComponent,
    ListDonerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
    DONER_ROUTE
  ]
})
export class DonerModule { }
