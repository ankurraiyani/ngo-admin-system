import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRoleComponent } from './add-role/add-role.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ROLE_ROUTE } from './add-role/servicetype-routing.module';
import { ListRoleComponent } from './list-role/list-role.component';



@NgModule({
  declarations: [
    AddRoleComponent,
    ListRoleComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ROLE_ROUTE
  ]
})
export class RoleModule { }
