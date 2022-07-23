import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddRoleComponent } from "./add-role/add-role.component";

// import { AddEventComponent } from "./add-event/add-event.component";
// import { ListEventComponent } from "./list-event/list-event.component";

const routes: Routes = [
    { path: 'add', component: AddRoleComponent},
];
export const ROLE_ROUTE: ModuleWithProviders<any> = RouterModule.forChild(routes);