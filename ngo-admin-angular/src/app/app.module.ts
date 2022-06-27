import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EvnetRepository } from './repository/event.repository';
import { EvnetService } from './services/event.service';
import { ApiClientRepository } from './common/Apiclient.repository';

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
    ApiClientRepository
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
