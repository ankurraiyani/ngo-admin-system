import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddServicedetailComponent } from "./add-servicedetail/add-servicedetail.component";
import { ListServicedetailComponent } from "./list-servicedetail/list-servicedetail.component";


const routes: Routes = [
    { path: '', component: ListServicedetailComponent},
    { path: 'add', component: AddServicedetailComponent},
];
export const SERVICEDETAIL_ROUTE: ModuleWithProviders<any> = RouterModule.forChild(routes);