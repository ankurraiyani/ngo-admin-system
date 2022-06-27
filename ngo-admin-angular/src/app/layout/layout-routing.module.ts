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
            },
            { 
                path: 'volunteer', 
                loadChildren: () => import('./volunteer/volunteer.module')
                                .then(module => module.VolunteerModule) 
            }
            
        ]
    }
];
export const LAYOUT_ROUTE: ModuleWithProviders<any> = RouterModule.forChild(routes);