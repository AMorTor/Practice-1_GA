import { Component } from '@angular/core';
import { GrapFunctionService } from '../../services/grap-function.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(private graphFunction: GrapFunctionService) {}

  public onNewData(): void {
    // ...
  }
}
