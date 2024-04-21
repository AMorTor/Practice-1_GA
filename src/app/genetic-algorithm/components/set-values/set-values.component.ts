import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'genetic-algorithm-set-values',
  templateUrl: './set-values.component.html',
})
export class SetValuesComponent {
  @Output()
  public onNewNumber: EventEmitter<any> = new EventEmitter();

  emitData() {}
}
