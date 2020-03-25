import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaClienteComponent } from './consulta-cliente/consulta-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaClienteComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    // NwbAllModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
