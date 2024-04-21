import { Component } from '@angular/core';
import { NumberGenetarationService } from '../../services/number-generation/number-genetaration.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(private numberGeneration: NumberGenetarationService) {}

  public onNewData(): void {
    // ...
  }
}
