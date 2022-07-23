import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddServicetypeComponent } from "./add-servicetype.component";
// import { AddEmployeeComponent } from "./add-employee/add-employee.component";
// import { ListEmployeeComponent } from "./list-employee/list-employee.component";
// import { AddEventComponent } from "./add-event/add-event.component";
// import { ListEventComponent } from "./list-event/list-event.component";

const routes: Routes = [
    { path: 'add', component: AddServicetypeComponent},
];
export const SERVICETYPE_ROUTE: ModuleWithProviders<any> = RouterModule.forChild(routes);