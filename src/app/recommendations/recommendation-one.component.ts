import { Component, Input } from '@angular/core';

@Component({
  template: `
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col">
              <h4 class="mt-0">Title</h4>  
            
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A iste, numquam <strong>tenetur, voluptates vero magni,</strong> ad nesciunt quibusdam sed ipsum sequi quos deleniti ex ducimus id rerum ratione totam delectus!</p>
            </div>

            <div class="col bg-secondary">
              column two
            </div>
            
            <div class="col">
              column three
            </div>
          </div>
        </div>
      </div>
  `,
})
export class RecommendationOneComponent {
  @Input() content;

  constructor() {}
}
