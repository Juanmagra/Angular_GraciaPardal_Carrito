import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { ListarArticulosComponent } from './components/listar-articulos/listar-articulos.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent,
    ListarArticulosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
