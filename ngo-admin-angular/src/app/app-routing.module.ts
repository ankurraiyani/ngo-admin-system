import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { 
    path: "event", 
    loadChildren: () => import('./event/event.module')
                        .then(module => module.EventModule) 
  },
  { 
    path: "employee", 
    loadChildren: () => import('./employee/employee.module')
                        .then(module => module.EmployeeModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
