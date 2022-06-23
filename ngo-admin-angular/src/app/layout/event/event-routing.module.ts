import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddEventComponent } from "./add-event/add-event.component";
import { ListEventComponent } from "./list-event/list-event.component";

const routes: Routes = [
    { path: '', component: ListEventComponent},
    { path: 'add', component: AddEventComponent},
];
export const EVENT_ROUTE: ModuleWithProviders<any> = RouterModule.forChild(routes);