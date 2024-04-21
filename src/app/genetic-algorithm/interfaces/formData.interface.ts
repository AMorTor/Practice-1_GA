import { Function } from './function.interface';
import { generationMode } from './mode.interface';

export interface FormData {
  selectedFunction: Function;
  selectedGenerationMode: generationMode;
  upperLimit: number;
  lowerLimit: number;
  populationSize: number;
}
