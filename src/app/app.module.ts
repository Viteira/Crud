import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiServicesService } from './service/api-services.service';
import { MeuComponenteComponent } from './meu-componente/meu-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuComponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
