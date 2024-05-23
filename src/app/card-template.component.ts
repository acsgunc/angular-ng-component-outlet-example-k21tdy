import { Component, Input, OnInit } from '@angular/core';

@Component({
  template: `
  <div class="slide">

    <app-title [content]="content.title"></app-title>

    <div class="slide-body">
      <ng-container *ngComponentOutlet="content.body.component; ndcDynamicInputs: content.body"></ng-container>
    </div>

    <div *ngIf="content.recommendations" class="slide-recommendation" [ngClass]="{'slide-recommendation-trend': content.recommendations.trend}">

      <h2 *ngIf="!content.recommendations.trend" class="text-white my-0">Recommendation</h2>

      <h2 *ngIf="content.recommendations.trend" class="text-white my-0">Did you know?</h2>

      <ng-container *ngComponentOutlet="content.recommendations.component; ndcDynamicInputs: content.recommendations"></ng-container>
    </div>
  
  </div>

  
  `,
})
export class CardTemplateComponent implements OnInit {
  @Input() content: any;

  constructor() {}

  ngOnInit() {}
}
