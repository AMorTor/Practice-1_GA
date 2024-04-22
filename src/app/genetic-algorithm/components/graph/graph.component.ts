import { Component } from '@angular/core';
import { GrapFunctionService } from '../../services/graph-function/grap-function.service';

@Component({
  selector: 'genetic-algorithm-graph',
  templateUrl: './graph.component.html',
})
export class GraphComponent {
  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = false;

  colorScheme = 'cool';

  constructor(private graphFunction: GrapFunctionService) {
    Object.assign(this, this.graphFunction.data);
    this.graphFunction.generateData();
  }
  get data() {
    return this.graphFunction.data;
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
