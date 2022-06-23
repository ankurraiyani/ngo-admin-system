import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout.component";

const routes: Routes = [
    { 
        path: '', component: LayoutComponent,
        children: [
            { 
                path: '', 
                loadChildren: () => import('./dashboard/dashboard.module')
                                .then(module => module.DashboardModule) 
            },
            { 
                path: 'event', 
                loadChildren: () => import('./event/event.module')
                                .then(module => module.EventModule) 
            }
        ]
    }
];
export const LAYOUT_ROUTE: ModuleWithProviders<any> = RouterModule.forChild(routes);