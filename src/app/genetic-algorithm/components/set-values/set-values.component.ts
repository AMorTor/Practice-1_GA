import { Component, EventEmitter, Output } from '@angular/core';

import { FormData } from '../../interfaces/formData.interface';
import { Function } from '../../interfaces/function.interface';
import { generationMode } from '../../interfaces/mode.interface';

@Component({
  selector: 'genetic-algorithm-set-values',
  templateUrl: './set-values.component.html',
})
export class SetValuesComponent {
  @Output()
  public onNewNumber: EventEmitter<FormData> = new EventEmitter();

  public functions: Function[] = [
    {
      value: 'Dafault Value',
      displayedValue: 'Select a function',
    },
    {
      value: 'Function 1',
      displayedValue: 'x^2',
    },
    {
      value: 'Function 2',
      displayedValue: 'ABS|(x-5)/2+senx|',
    },
    {
      value: 'Function 3',
      displayedValue: '1/x',
    },
  ];

  public generationMode: generationMode[] = [
    { value: 'Default Value', displayedValue: 'Select a mode' },
    { value: 'mode 1', displayedValue: 'Simple' },
    { value: 'mode 2', displayedValue: 'Generational' },
  ];

  public formData: FormData = {
    selectedFunction: {
      value: 'Default value',
      displayedValue: 'Select a function',
    },
    selectedGenerationMode: {
      value: 'Default value',
      displayedValue: 'Select a mode',
    },
    upperLimit: 100,
    lowerLimit: 0,
    populationSize: 10,
  };

  emitData() {
    this.onNewNumber.emit(this.formData);
  }
}
