import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiServicesService } from './service/api-services.service';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { TesteComponent } from './componentes/teste/teste.component';
@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    TesteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    ApiServicesService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
