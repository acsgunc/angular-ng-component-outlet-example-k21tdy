import { Component, Input, OnInit } from '@angular/core';

@Component({
  template: `
  <div class="gradient-classic" style="height: 10px;"></div>
  
  <div class="slide">
    <div class="slide-body">
      <h1 class="my-0" [attr.contenteditable]="attrs.contenteditable">{{ content.title.heading }}</h1>
      <h2 class="mb-0" [attr.contenteditable]="attrs.contenteditable">{{ content.title.subheading }}</h2>
    </div>
  </div>
  `,
})
export class CardTitleComponent implements OnInit {
  @Input() content;
  @Input() attrs;

  constructor() {}

  ngOnInit() {}
}
