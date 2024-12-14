import { Component, signal } from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { IMAGES } from '../images';
import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'app-proper-sizing',
  standalone: true,
  template: `
    <div
      class="flex flex-col justify-center items-center max-w-[800px] w-full mx-auto my-8">
      <h2>Landing Page with Proper Image Sizing</h2>

      <div class="flex flex-col gap-16">
        @for (image of images; let index = $index; track index) {
          <app-section>
            <img
              [ngSrc]="image.path"
              [alt]="image.alt"
              [height]="image.height"
              [width]="image.width"
              [style.background-color]="image.bgColor"
              loading="lazy"
              class="object-contain z-10 duration-500 animations"
              [ngClass]="{ 'opacity-0': !imageLoaded().get(index) }"
              (load)="setImageLoaded(index)" />
          </app-section>
        }
      </div>

    </div>
  `,
  styles: [
    `
      .animations {
        transition-property: opacity, display;
        transition-duration: 0.25s;
        transition-behavior: allow-discrete;
      }
    `,
  ],
  imports: [NgOptimizedImage, NgClass, SectionComponent],
})
export class ProperSizingComponent {
  images = IMAGES;

  imageLoaded = signal<Map<number, boolean>>(new Map());

  setImageLoaded(index: number) {
    requestAnimationFrame(() => {
      this.imageLoaded.update(map => {
        const newMap = new Map(map).set(index, true);
        newMap.set(index, true);
        return newMap;
      });
    });
  }
}
