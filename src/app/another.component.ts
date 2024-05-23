import { Component, Input } from '@angular/core';

@Component({
  template: `
    <p [innerHTML]="content.text"></p>

    <div>
      <img *ngFor="let image of content.images" [src]="image" height="400" />
    </div>
  `,
})
export class AnotherComponent {
  @Input() content;

  constructor() {
    console.log('AnotherComponent generated');
  }
}
