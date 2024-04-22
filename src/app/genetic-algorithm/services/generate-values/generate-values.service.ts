import { Injectable } from '@angular/core';
import { FormData } from '../../interfaces/formData.interface';
import { EvaluatedValues } from '../../interfaces/evaluatedValues.interface.';

@Injectable({
  providedIn: 'root',
})
export class GenerateValuesService {
  // Properties
  public evaluatedValues: EvaluatedValues = {
    values: [],
    evaluation: [],
  };

  // Methods
  public evaluateFunction(data: FormData): void {
    switch (data.selectedFunction.value) {
      case 'Function 1':
        this.generateFunction1Values(data);
        break;

      default:
        break;
    }
  }

  public generateFunction1Values(data: FormData): void {
    let values: number[] = [];
    let evaluation: number[] = [];
    for (let i = 0; i < data.populationSize; i++) {
      values.push(
        Math.round(
          Math.random() * (data.upperLimit - data.lowerLimit) - data.lowerLimit
        )
      );
      evaluation[i] = Math.pow(values[i], 2);
    }
    this.evaluatedValues.values = values;
    this.evaluatedValues.evaluation = evaluation;
  }
}
