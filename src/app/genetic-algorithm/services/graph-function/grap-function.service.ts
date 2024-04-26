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

  public maxMinValues: { function: string; max: number; min: number } = {
    function: '',
    max: 0,
    min: 0,
  };

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
        this.multi = [
          { name: 'function no selected', series: [{ name: '0', value: 0 }] },
        ];
        break;
    }
  }

  public generateFunction1(randomNumbers: number[]) {
    this.multi[0].name = 'Function 1';
    let maxValue = -Infinity;
    let minValue = Infinity;

    for (let i = 0; i < randomNumbers.length; i++) {
      const value = Math.pow(randomNumbers[i], 2);
      this.multi[0].series.push({
        name: i.toString(),
        value: value,
      });

      // Actualizar el valor máximo y mínimo
      if (value > maxValue) {
        maxValue = value;
      }
      if (value < minValue) {
        minValue = value;
      }
    }

    console.log('Max Value Function 1:', maxValue);
    console.log('Min Value Function 1:', minValue);
  }

  public generateFunction2(randomNumbers: number[]) {
    let maxValue = -Infinity;
    let minValue = Infinity;
    this.multi[1].name = 'Function 2';

    for (let i = 0; i < randomNumbers.length; i++) {
      const value = Math.pow(randomNumbers[i], 2);
      this.multi[1].series.push({
        name: i.toString(),
        value: value,
      });

      // Actualizar el valor máximo y mínimo
      if (value > maxValue) {
        maxValue = value;
      }
      if (value < minValue) {
        minValue = value;
      }
    }

    console.log('Max Value Function 2:', maxValue);
    console.log('Min Value Funtion 2:', minValue);
  }

  public generateFunction3(randomNumbers: number[]) {
    let maxValue = -Infinity;
    let minValue = Infinity;
    this.multi[2].name = 'Function 3';

    for (let i = 0; i < randomNumbers.length; i++) {
      const value = Math.pow(randomNumbers[i], 1 / 2);
      this.multi[2].series.push({
        name: i.toString(),
        value: value,
      });

      // Actualizar el valor máximo y mínimo
      if (value > maxValue) {
        maxValue = value;
      }
      if (value < minValue) {
        minValue = value;
      }
    }

    console.log('Max Value Function3 3:', maxValue);
    console.log('Min Value Function3 3:', minValue);
  }
}
