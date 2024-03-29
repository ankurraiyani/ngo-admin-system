import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPermissionComponent } from './list-permission/list-permission.component';
import { PERMISSION_ROUTE } from './permission-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    ListPermissionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    PERMISSION_ROUTE
  ]
})
export class PermissionModule { }
