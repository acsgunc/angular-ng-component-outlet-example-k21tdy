import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
    <div class="gradient-classic" style="height: 10px;"></div>

    <div class="slide-title">
      <div class="flex-grow-1">
        <h2 class="mt-0 mb-0">{{content.heading}}</h2>
        <h3 class="mt-0 text-muted">{{content.subheading}}</h3>
      </div>
      
      <div>
        <span *ngIf="content.recommendation" class="badge badge-pill badge-primary">Recommendation</span>
      </div>
    </div>
  `,
})
export class TitleComponent implements OnInit {
  @Input() content;

  constructor() {}

  ngOnInit() {}
}
