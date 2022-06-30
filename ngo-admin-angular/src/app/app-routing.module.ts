import { ComponentRef, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {

    path: "", 
    loadChildren: () => import('./layout/layout.module')
                        .then(module => module.LayoutModule) 
  },
  {
    // path:'edit/id',
    // Component:editUser
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
