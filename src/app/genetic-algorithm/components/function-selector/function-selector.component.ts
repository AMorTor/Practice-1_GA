import { Component } from '@angular/core';

import { Functions } from '../../interfaces/functions.interface';

@Component({
  selector: 'genetic-algorithm-function-selector',
  templateUrl: './function-selector.component.html',
})
export class FunctionSelectorComponent {
  Functions: Functions[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
}
