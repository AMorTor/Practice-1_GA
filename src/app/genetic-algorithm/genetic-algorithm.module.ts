import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { FunctionSelectorComponent } from './components/function-selector/function-selector.component';
import { GraphComponent } from './components/graph/graph.component';
import { TableComponent } from './components/table/table.component';
import { SetValuesComponent } from './components/set-values/set-values.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainPageComponent,
    FunctionSelectorComponent,
    GraphComponent,
    TableComponent,
    SetValuesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[MainPageComponent]
})
export class GeneticAlgorithmModule { }
