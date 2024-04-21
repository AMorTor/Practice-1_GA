import { Component } from '@angular/core';
import { GrapFunctionService } from '../../services/grap-function.service';
import { FormData } from '../../interfaces/formData.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(private graphFunction: GrapFunctionService) {}

  public onNewData(formData: FormData): void {
    console.table(formData);
  }
}
