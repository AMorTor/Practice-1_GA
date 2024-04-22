import { Component, Input } from '@angular/core';
import { GeneticNumber } from '../../interfaces/geneticNumber.interface';
import { GeneticNumberService } from '../../services/genetic-number/genetic-number.service';

@Component({
  selector: 'genetic-algorithm-table',
  templateUrl: './table.component.html',
})
export class TableComponent {
  // Properties
  @Input()
  public randomNumbers: number[] = [];

  constructor(private geneticNumber: GeneticNumberService) {}

  get geneticNumbers(): GeneticNumber[] {
    return this.geneticNumber.geneticNumbers;
  }
}
