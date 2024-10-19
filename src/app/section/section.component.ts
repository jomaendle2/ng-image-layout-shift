import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [],
  template: `
    <section>
      <div class="relative rounded-xl shadow overflow-hidden">
        <ng-content></ng-content>
      </div>
      <div class="mt-3 flex flex-col gap-2">
        <h3>Image and Text</h3>
        <p>
          This is the first text passage. It describes the content related to
          the first image. You can customize this text with whatever information
          you want to display here.
        </p>
      </div>
    </section>
  `,
})
export class SectionComponent {
}
