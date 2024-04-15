import { Component } from '@angular/core';

@Component({
  selector: 'genetic-algorithm-set-values',
  templateUrl: './set-values.component.html',

})
export class SetValuesComponent {
  public lowerLimit: number = 0;
  public upperLimit: number = 0;
  public spaceOfSolutions:number = 0;

  public showValues(): void {
    console.log(this.lowerLimit);
    console.log(this.upperLimit);
    console.log(this.spaceOfSolutions);
  }

}
