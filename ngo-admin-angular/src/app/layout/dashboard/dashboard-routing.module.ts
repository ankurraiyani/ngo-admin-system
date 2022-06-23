import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";

const routes: Routes = [
    { 
        path: '', component: DashboardComponent
    }
];
export const DASHBOARD_ROUTE: ModuleWithProviders<any> = RouterModule.forChild(routes);