import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LAYOUT_ROUTE } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LayoutComponent } from './layout.component';




@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SideBarComponent,
  ],
  imports: [
    CommonModule,
    LAYOUT_ROUTE
  ],
})
export class LayoutModule { }
