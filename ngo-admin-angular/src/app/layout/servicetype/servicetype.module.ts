import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddServicetypeComponent } from './add-servicetype/add-servicetype.component';
import { SERVICETYPE_ROUTE } from './add-servicetype/servicetype-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddServicetypeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SERVICETYPE_ROUTE
    
  ]
})
export class ServicetypeModule { }
