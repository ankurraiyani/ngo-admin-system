import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddExpensesComponent } from "./add-expenses/add-expenses.component";
import { ListExpensesComponent } from "./list-expenses/list-expenses.component";
// import { AddEventComponent } from "./add-event/add-event.component";
// import { ListEventComponent } from "./list-event/list-event.component";

const routes: Routes = [

    { path:'',component:ListExpensesComponent},
    { path: 'add', component: AddExpensesComponent},
];

export const EXPENSES_ROUTE: ModuleWithProviders<any> = RouterModule.forChild(routes);