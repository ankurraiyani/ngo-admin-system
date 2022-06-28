import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EvnetRepository } from './repository/event.repository';
import { EvnetService } from './services/event.service';
import { ApiClientRepository } from './common/Apiclient.repository';
import { VolunteerService } from './services/volunteer.service';
import { VolunteerRepository } from './repository/volunteer.repository';
import { EmployeeRepository } from './repository/employee.repository';
import { EmployeeService } from './services/employee.service';
import { DonerService } from './services/doner.service';
import { DonerRepository } from './repository/doner.repository';
import { CommonService } from './common/common.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    EvnetRepository,
    EvnetService,
    VolunteerRepository,
    VolunteerService,
    ApiClientRepository,
    EmployeeRepository,
    EmployeeService,
    DonerService,
    DonerRepository,
    CommonService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
