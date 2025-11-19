import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-upper-hero-section',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <div class="mt-header-height lg:mt-0 lg:max-w-984 media-screen-1366:max-w-1224 mx-auto lg:px-3">
      <img
        src="/hero-section.jpg"
        class="w-full aspect-[11/3] object-cover max-h-24 lg:max-h-full"
        alt="hero-section"
      />
      <div class="px-3 lg:px-6 bg-white">
        <div class="flex lg:gap-4 gap-1 items-center lg:items-start relative">
          <div
            class="w-32 h-32 absolute -top-4 shadow-md bg-white lg:flex items-center justify-center z-40 hidden"
            [class]="isSticky() ? 'hidden' : 'block'"
          >
            <img src="/komeda-logo.jpg" class="max-w-[120px] aspect-square" alt="komeda-logo" />
          </div>
          <div class="w-32 hidden lg:block"></div>
          <div class="lg:hidden">
            <img src="/komeda-logo.jpg" class="w-14 h-14" alt="komeda-logo" />
          </div>
          <div class="flex flex-col flex-shrink-0">
            <div class="flex items-center gap-2">
              <h1 class="py-8 text-xl lg:text-2xl font-bold">台灣客美多股份有限公司</h1>
              <a
                routerLink="/abroad"
                class="text-brighter-blue border border-brighter-blue rounded-full px-2"
                >外商</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class UpperHeroSection {
  isSticky = signal(false);
  stickyThreshold = 475;
  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollPosition = window.scrollY;
    if (scrollPosition > this.stickyThreshold) {
      this.isSticky.set(true);
    } else {
      this.isSticky.set(false);
    }
  }
}
