import { Component, EventEmitter, Output } from '@angular/core';
import { NumberGenetarationService } from '../../services/number-generation/number-genetaration.service';

@Component({
  selector: 'genetic-algorithm-set-values',
  templateUrl: './set-values.component.html',
})
export class SetValuesComponent {
  @Output()
  public onNewNumber: EventEmitter<any> = new EventEmitter();

  emitData() {}
}
