import { Component } from '@angular/core';
<<<<<<< HEAD:src/app/genetic-algorithm/components/line-chart/line-chart/line-chart.component.ts
import { FormData } from '../../../interfaces/formData.interface';
import { GrapFunctionService } from '../../../services/graph-function/grap-function.service';
=======
import { GrapFunctionService } from '../../services/graph-function/grap-function.service';
import { EvaluatedValues } from '../../interfaces/evaluatedValues.interface.';
>>>>>>> main:src/app/genetic-algorithm/components/graph/graph.component.ts

@Component({
  selector: 'genetic-algorithm-line-chart',
  templateUrl: './line-chart.component.html',
})
export class LineChartComponent {
  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'population';
  yAxisLabel: string = 'value';
  timeline: boolean = false;

  colorScheme = 'cool';

  public evaluatedValues: EvaluatedValues = {
    values: [],
    evaluation: [],
  };
  constructor(private graphFunction: GrapFunctionService) {
    Object.assign(this, this.graphFunction.multi);
  }
  get multi() {
    return this.graphFunction.multi;
  }

  onSelect(data: FormData): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: FormData): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: FormData): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
