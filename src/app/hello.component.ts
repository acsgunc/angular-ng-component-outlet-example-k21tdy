import { Component, Input } from '@angular/core';

@Component({
  template: `
      <p>{{content.text}}</p>

      <ng-template #starTemplate let-fill="fill">
        <span class="star" [class.full]="fill === 100">
          <span class="half" [style.width.%]="fill"> &#9733; </span>
          &#9734;
        </span>
      </ng-template>

      <ngb-rating
        class="rating-large"
        [(rate)]="content.rating"
        [starTemplate]="starTemplate"
        [readonly]="true"
        [max]="5"
      ></ngb-rating>
  `,
})
export class HelloComponent {
  @Input() content;

  constructor() {}
}
