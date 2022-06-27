import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddDonerComponent } from "./add-doner/add-doner.component";
import { ListDonerComponent } from "./list-doner/list-doner.component";


const routes: Routes = [
    
    { path:'add',component:AddDonerComponent },
    { path :'',component:ListDonerComponent }
];
export const DONER_ROUTE: ModuleWithProviders<any> = RouterModule.forChild(routes);