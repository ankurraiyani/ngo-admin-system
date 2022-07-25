import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddExpensesComponent } from './add-expenses/add-expenses.component';
import { EXPENSES_ROUTE } from './expenses-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListExpensesComponent } from './list-expenses/list-expenses.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AddExpensesComponent,
    ListExpensesComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    EXPENSES_ROUTE
  ]
})
export class ExpensesModule { }

