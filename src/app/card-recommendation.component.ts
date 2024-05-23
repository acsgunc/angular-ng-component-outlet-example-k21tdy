import { Component, Input, OnInit } from '@angular/core';

@Component({
  template: `
      <ng-container *ngFor="let recommendation of content">
        <ng-container *ngComponentOutlet="recommendation.component"></ng-container>
      </ng-container>
  `,
})
export class CardRecommendationComponent implements OnInit {
  @Input() content: any;

  constructor() {}

  ngOnInit() {}
}
