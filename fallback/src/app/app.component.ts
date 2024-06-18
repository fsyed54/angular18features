import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container">
      <app-content-container>
        <h3>Custom Content</h3>
        <p>This is the custom content projected from the parent component.</p>
      </app-content-container>

      <app-content-container></app-content-container>
    </div>
  `,
  styles: [
    `
      .app-container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }
    `,
  ],
})
export class AppComponent {}
