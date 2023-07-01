import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ResistenciaModuleModule } from './utl/resistencia-module/resistencia-module.module';
import { CinepolisModuleModule } from './utl/cinepolis-module/cinepolis-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DistanciaModuleModule } from './utl/distancia-module/distancia-module.module';
import { AppRoutingModule } from './app.routing.module';
import { MenuComponent } from './utl/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CinepolisModuleModule,
    DistanciaModuleModule,
    ResistenciaModuleModule,
    BrowserAnimationsModule,
    AppRoutingModule //Para gestionar las rutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
