import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ResistenciaModuleModule } from './utl/resistencia-module/resistencia-module.module';
import { CinepolisModuleModule } from './utl/cinepolis-module/cinepolis-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DistanciaModuleModule } from './utl/distancia-module/distancia-module.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CinepolisModuleModule,
    DistanciaModuleModule,
    ResistenciaModuleModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
