import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddServicedetailComponent } from './add-servicedetail/add-servicedetail.component';
import { SERVICEDETAIL_ROUTE } from './servicedetail-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListServicedetailComponent } from './list-servicedetail/list-servicedetail.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AddServicedetailComponent,
    ListServicedetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    SERVICEDETAIL_ROUTE
  ]
})
export class ServicedetailModule { }
