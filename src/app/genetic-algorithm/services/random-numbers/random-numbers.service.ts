import { Injectable } from '@angular/core';
import { FormData } from '../../interfaces/formData.interface';

@Injectable({
  providedIn: 'root',
})
export class RandomNumbersService {
  public generateRandomNumbers(formData: FormData): number[] {
    const randomNumbers: number[] = [];
    for (let i = 0; i < formData.populationSize; i++) {
      randomNumbers.push(
        Math.floor(
          Math.random() * (formData.upperLimit - formData.lowerLimit) -
            formData.lowerLimit
        )
      );
    }
    return randomNumbers;
  }
}
