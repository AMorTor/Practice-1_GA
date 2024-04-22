import { Injectable } from '@angular/core';

import { graphData } from '../../interfaces/graphData.interface';
import { FormData } from '../../interfaces/formData.interface';
@Injectable({
  providedIn: 'root',
})
export class GrapFunctionService {
  public multi = [
    {
      name: '',
      series: [{ name: '', value: 0 }],
    },
    {
      name: '',
      series: [{ name: '', value: 0 }],
    },
    {
      name: '',
      series: [{ name: '', value: 0 }],
    },
  ];

  public evaluateFunction(formData: FormData, randomNumbers: number[]) {
    switch (formData.selectedFunction.value) {
      case 'Function 1':
        this.multi[0].series = [];
        this.generateFunction1(randomNumbers);

        break;

      case 'Function 2':
        this.multi[1].series = [];
        this.generateFunction2(randomNumbers);

        break;

      case 'Function 3':
        this.multi[2].series = [];
        this.generateFunction3(randomNumbers);

        break;
      default:
        break;
    }
  }

  public generateFunction1(randomNumbers: number[]) {
    this.multi[0].name = 'Function 1';
    for (let i = 0; i < randomNumbers.length; i++) {
      this.multi[0].series.push({
        name: i.toString(),
        value: Math.pow(randomNumbers[i], 2),
      });
    }
  }

  public generateFunction2(randomNumbers: number[]) {
    this.multi[1].name = 'Function 2';
    for (let i = 0; i < randomNumbers.length; i++) {
      this.multi[1].series.push({
        name: i.toString(),
        value: Math.abs(
          (randomNumbers[i] - 5) / 2 + Math.sin(randomNumbers[i])
        ),
      });
      console.log(this.multi[1].series[i]);
    }
  }

  public generateFunction3(randomNumbers: number[]) {
    this.multi[2].name = 'Function 3';
    for (let i = 0; i < randomNumbers.length; i++) {
      this.multi[2].series.push({
        name: i.toString(),
        value: randomNumbers[i],
      });
    }
  }
}
