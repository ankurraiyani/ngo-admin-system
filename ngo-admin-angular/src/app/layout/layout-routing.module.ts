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
                                .then(module => module.DashboardModule) ,
                               
            },
            { 
                path: 'event', 
                loadChildren: () => import('./event/event.module')
                                .then(module => module.EventModule) 
            },
            { 
                path: 'employee', 
                loadChildren: () => import('./employee/employee.module')
                                .then(module => module.EmployeeModule) 
            },
            {
                path: 'doner', 
                loadChildren: () => import('./doner/doner.module')
                                .then(module => module.DonerModule) 
            },
            {
                path: 'volunteer', 
                loadChildren: () => import('./volunteer/volunteer.module')
                                .then(module => module.VolunteerModule) 
            },
            {
                path : 'servicedetail',
                loadChildren: () => import('./servicedetail/servicedetail.module').then(module => module.ServicedetailModule)
            }
            
        ]
    }
];
export const LAYOUT_ROUTE: ModuleWithProviders<any> = RouterModule.forChild(routes);