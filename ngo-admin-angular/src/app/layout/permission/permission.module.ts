import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPermissionComponent } from './list-permission/list-permission.component';
import { PERMISSION_ROUTE } from './permission-routing.module';



@NgModule({
  declarations: [
    ListPermissionComponent
  ],
  imports: [
    CommonModule,
    PERMISSION_ROUTE
  ]
})
export class PermissionModule { }
