import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { GraphComponent } from './components/graph/graph.component';
import { TableComponent } from './components/table/table.component';
import { SetValuesComponent } from './components/set-values/set-values.component';

import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    MainPageComponent,
    GraphComponent,
    TableComponent,
    SetValuesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule,
  ],
  exports: [MainPageComponent],
})
export class GeneticAlgorithmModule {}
