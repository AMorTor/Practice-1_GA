import { Component, Input } from '@angular/core';
import { FormData } from '../../interfaces/formData.interface';

import { GrapFunctionService } from '../../services/graph-function/grap-function.service';
import { GenerateValuesService } from '../../services/generate-values/generate-values.service';
import { EvaluatedValues } from '../../interfaces/evaluatedValues.interface.';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  // properties
  public functionValues: EvaluatedValues = { values: [], evaluation: [] };

  constructor(
    private generatedValues: GenerateValuesService,
    private graphFunction: GrapFunctionService
  ) {}
  // Properties
  public onNewFormData(formData: FormData): void {
    this.generatedValues.evaluateFunction(formData);
    this.functionValues = this.generatedValues.evaluatedValues;
    console.log(this.functionValues);
  }
}
