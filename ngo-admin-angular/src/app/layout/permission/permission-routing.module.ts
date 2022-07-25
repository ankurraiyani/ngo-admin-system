import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListPermissionComponent } from "./list-permission/list-permission.component";

// import { AddEventComponent } from "./add-event/add-event.component";
// import { ListEventComponent } from "./list-event/list-event.component";

const routes: Routes = [

    { path:'',component:ListPermissionComponent},
   
];

export const PERMISSION_ROUTE: ModuleWithProviders<any> = RouterModule.forChild(routes);