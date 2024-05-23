import { Component, Input, OnInit } from '@angular/core';

@Component({
  template: `
      <pbds-dataviz-gauge [width]="260" [data]="content.gauge" description="Product Two"></pbds-dataviz-gauge>
`,
})
export class ByeComponent implements OnInit {
  @Input() content: any;

  constructor() {
  }

  ngOnInit() {
    console.log(this.content);
  }
}
