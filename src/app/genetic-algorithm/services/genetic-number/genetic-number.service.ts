import { Injectable } from '@angular/core';
import { GeneticNumber } from '../../interfaces/geneticNumber.interface';

@Injectable({
  providedIn: 'root',
})
export class GeneticNumberService {
  geneticNumbers: GeneticNumber[] = [];

  public generateNumbers(randomNumbers: number[]): void {
    this.geneticNumbers = [];
    for (let i = 0; i < randomNumbers.length; i++) {
      this.geneticNumbers.push({
        decimal: randomNumbers[i],
        binary: randomNumbers[i].toString(2),
        gray: (randomNumbers[i] ^ (randomNumbers[i] >> 1)).toString(2),
      });
    }
  }
}
