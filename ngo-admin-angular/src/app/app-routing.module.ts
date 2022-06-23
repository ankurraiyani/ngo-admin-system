import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {

    path: "", 
    loadChildren: () => import('./layout/layout.module')
                        .then(module => module.LayoutModule) 
  },
  {
    path: "event", 
    loadChildren: () => import('./layout/event/event.module')
                        .then(module => module.EventModule) 
  },
  // { 
  //   path: "employee", 
  //   loadChildren: () => import('./layout/')
  //                       .then(module => module.EmployeeModule) 
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
