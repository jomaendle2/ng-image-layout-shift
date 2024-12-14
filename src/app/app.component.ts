import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ProperSizingComponent } from './proper-sizing/proper-sizing.component';
import { WithoutSizingComponent } from './without-sizing/without-sizing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    ProperSizingComponent,
    WithoutSizingComponent,
    RouterLinkActive,
  ],
  template: `
    <nav class="flex w-full justify-center z-30 sticky top-0 p-8 bg-zinc-800">
      <ul class="flex gap-4">
        <li>
          <a routerLink="/" routerLinkActive="active"
             [routerLinkActiveOptions]="{ exact: true }"
             class="border border-white/40 px-4 py-3 rounded-full hover:bg-zinc-700 transition-colors">Home</a>
        </li>
        <li>
          <a
            routerLink="/without-sizing"
            routerLinkActive="active"
            class="border border-white/40 px-4 py-3 rounded-full hover:bg-zinc-700 transition-colors"
          >Without Sizing</a
          >
        </li>
        <li>
          <a
            routerLink="/proper-sizing"
            routerLinkActive="active"
            class="border border-white/40 px-4 py-3 rounded-full hover:bg-zinc-700 transition-colors"
          >Proper Sizing</a
          >
        </li>
      </ul>
    </nav>

    <div class="px-4">
      <router-outlet />
    </div>
  `,
  styles: `
    .active {
      @apply bg-zinc-600 text-white;
    }
  `
})
export class AppComponent {

}
