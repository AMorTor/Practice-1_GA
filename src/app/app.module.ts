import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{GeneticAlgorithmModule} from './genetic-algorithm/genetic-algorithm.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GeneticAlgorithmModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
