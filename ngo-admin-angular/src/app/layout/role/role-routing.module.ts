import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddRoleComponent } from "./add-role/add-role.component";

const routes: Routes = [
    { path: 'add', component: AddRoleComponent},
];
export const ROLE_ROUTE: ModuleWithProviders<any> = RouterModule.forChild(routes);