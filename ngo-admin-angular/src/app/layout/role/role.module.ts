import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRoleComponent } from './add-role/add-role.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListRoleComponent } from './list-role/list-role.component';
import { ROLE_ROUTE } from './role-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    AddRoleComponent,
    ListRoleComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    ROLE_ROUTE
  ]
})
export class RoleModule { }
