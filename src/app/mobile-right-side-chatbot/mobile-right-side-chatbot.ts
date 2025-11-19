import { Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mobile-right-side-chatbot',
  imports: [RouterLink],
  template: `
    <div class="fixed right-3 bottom-20">
      <div class="flex flex-col gap-2">
        <div
          class="h-12 w-12 rounded-full flex justify-center items-center bg-white shadow-md hover:text-primary-orange"
        >
          <span><i class="fa-solid fa-share fa-lg"></i> </span>
        </div>
        <a
          routerLink="/report"
          class="h-12 w-12 rounded-full flex justify-center items-center bg-white shadow-md hover:text-primary-orange"
        >
          <span><i class="fa-solid fa-flag fa-lg"></i></span>
        </a>
        <div
          class="h-12 w-12 rounded-full flex justify-center items-center bg-white shadow-md hover:text-primary-orange"
          [class]="buttonShow() ? 'flex' : 'hidden'"
          (click)="scrollToTop()"
        >
          <span><i class="fa-solid fa-arrow-up fa-lg"></i> </span>
        </div>
      </div>
      <a routerLink="/chatbot" class="flex justify-center items-center mt-2">
        <img src="/chatbot.webp" alt="chatbot" class="h-12 w-12 rounded-full" />
      </a>
    </div>
  `,
  styles: ``,
})
export class MobileRightSideChatbot {
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  buttonShow = signal(false);
  @HostListener('window:scroll')
  onScroll() {
    this.buttonShow.set(window.scrollY > 200);
  }
}
