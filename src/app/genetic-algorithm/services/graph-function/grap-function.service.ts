import { Injectable } from '@angular/core';

import { graphData } from '../../interfaces/graphData.interface';

@Injectable({
  providedIn: 'root',
})
export class GrapFunctionService {
  public data: graphData[] = [
    {
      name: 'Function 1',
      series: [
        {
          name: 0,
          value: 0,
        },
      ],
    },
    {
      name: 'Function 2',
      series: [
        {
          name: 0,
          value: 0,
        },
      ],
    },
  ];

  public generateData(): void {
    for (let i = 0; i < 100; i++) {
      this.data[0].series.push({
        name: i,
        value: Math.pow(i, 2),
      });
      // this.data[1].series.push({
      //   name: i,
      //   value: Math.sin(i / 10) * Math.sin(i / 10) * 100,
      // });
    }
  }
}
