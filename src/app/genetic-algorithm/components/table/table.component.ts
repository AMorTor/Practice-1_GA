import { Component, Input } from '@angular/core';
import { EvaluatedValues } from '../../interfaces/evaluatedValues.interface.';

@Component({
  selector: 'genetic-algorithm-table',
  templateUrl: './table.component.html',
})
export class TableComponent {
  // Properties
  @Input()
  public values: EvaluatedValues = { values: [], evaluation: [] };
}
