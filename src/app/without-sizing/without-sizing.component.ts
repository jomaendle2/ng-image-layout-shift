import { Component, signal } from '@angular/core';
import { IMAGES } from '../images';
import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'app-without-sizing',
  standalone: true,
  template: `
    <div
      class="flex flex-col justify-center items-center max-w-[800px] w-full mx-auto my-8">
      <h2>Landing Page with Proper Image Sizing</h2>

      <div class="flex flex-col gap-16">
        @for (image of images; let index = $index; track index) {
          <app-section>
            <img
              [src]="image.path"
              [alt]="image.alt"
              class="object-contain rounded-md shadow" />
          </app-section>
        }
      </div>
    </div>
  `,
  imports: [SectionComponent],
})
export class WithoutSizingComponent {
  images = IMAGES;
}
