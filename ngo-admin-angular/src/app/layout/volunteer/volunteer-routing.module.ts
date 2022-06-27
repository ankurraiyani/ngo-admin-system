import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddVolunteerComponent } from "./add-volunteer/add-volunteer.component";
import { ListVolunteerComponent } from "./list-volunteer/list-volunteer.component";


const routes: Routes = [
    { path: '', component: ListVolunteerComponent},
    { path: 'add', component: AddVolunteerComponent},
];
export const VOLUNTEER_ROUTE: ModuleWithProviders<any> = RouterModule.forChild(routes);