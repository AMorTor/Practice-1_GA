import { Component } from '@angular/core';
import { FormData } from '../../../interfaces/formData.interface';
import { GrapFunctionService } from '../../../services/graph-function/grap-function.service';
import { graphData } from '../../../interfaces/graphData.interface';

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

  constructor(private graphFunction: GrapFunctionService) {
    Object.assign(this, this.graphFunction.multi);
  }

  get multi() {
    return this.graphFunction.multi;
  }

  onSelect(data: graphData): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: graphData): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: graphData): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
