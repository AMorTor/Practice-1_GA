import { Component, Input } from '@angular/core';
import { FormData } from '../../interfaces/formData.interface';

import { GrapFunctionService } from '../../services/graph-function/grap-function.service';
import { RandomNumbersService } from '../../services/random-numbers/random-numbers.service';
import { GeneticNumberService } from '../../services/genetic-number/genetic-number.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  // properties
  public randomNumbers: number[] = [];
  public multi = {
    name: '',
    series: [{ name: '0', value: 0 }],
  };

  constructor(
    private randomized: RandomNumbersService,
    private graphFunction: GrapFunctionService,
    private geneticNumber: GeneticNumberService
  ) {}
  // Properties
  public onNewFormData(formData: FormData): void {
    this.randomNumbers = this.randomized.generateRandomNumbers(formData);
    this.geneticNumber.generateNumbers(this.randomNumbers);
    this.graphFunction.evaluateFunction(formData, this.randomNumbers);
    this.graphFunction.multi = [...this.graphFunction.multi];
    console.table(this.graphFunction.multi);
  }
}

// this.graphFunction.multi = [...this.graphFunction.multi];
