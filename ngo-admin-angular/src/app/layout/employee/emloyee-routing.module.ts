import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddEmployeeComponent } from "./add-employee/add-employee.component";
import { ListEmployeeComponent } from "./list-employee/list-employee.component";
// import { AddEventComponent } from "./add-event/add-event.component";
// import { ListEventComponent } from "./list-event/list-event.component";

const routes: Routes = [
     { path: '', component:ListEmployeeComponent},
    { path: 'add', component: AddEmployeeComponent},
];
export const EMPLOYEE_ROUTE: ModuleWithProviders<any> = RouterModule.forChild(routes);