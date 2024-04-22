import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { TableComponent } from './components/table/table.component';
import { SetValuesComponent } from './components/set-values/set-values.component';
import { LineChartComponent } from './components/line-chart/line-chart/line-chart.component';

import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    MainPageComponent,
    TableComponent,
    SetValuesComponent,
    LineChartComponent,
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
