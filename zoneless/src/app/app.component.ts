import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  counter = 0;

  constructor(private ngZone: NgZone) {}

  runZoneless() {
    this.ngZone.runOutsideAngular(() => {
      this.computeIntensiveTask();
    });

    this.ngZone.run(() => {
      // No need to do anything here, as the change detection will be triggered
    });
  }

  computeIntensiveTask() {
    for (let i = 0; i < 1000000000; i++) {
      this.counter++;
    }
  }
}
