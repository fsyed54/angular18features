import { Component } from '@angular/core';

@Component({
  selector: 'app-content-container',
  template: `
    <div class="container">
      <h2>Content Container</h2>
      <div class="content-area">
        <ng-content>
          <p>This is the fallback content.</p>
        </ng-content>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        border: 1px solid #ccc;
        padding: 20px;
        margin-bottom: 20px;
        background-color: #f5f5f5;
        border-radius: 5px;
      }

      .content-area {
        border: 1px dashed #ccc;
        padding: 10px;
        min-height: 50px;
      }
    `,
  ],
})
export class ContentContainerComponent {}
