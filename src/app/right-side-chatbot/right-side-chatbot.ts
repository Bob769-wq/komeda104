import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
interface SharedList {
  id: number;
  title: string;
  link: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-right-side-chatbot',
  imports: [RouterLink],
  template: `
    <div class="fixed right-3 bottom-40 z-50">
      <div class="flex flex-col w-[4.5rem] items-center">
        <div class="bg-white shadow-md rounded flex flex-col items-center w-full pt-6">
          <div class="flex flex-col items-center group cursor-pointer">
            <ul
              class="flex flex-col gap-4 mb-4 max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-500 ease-in"
            >
              @for (item of SharedItem; track item.id) {
                <li class="hover:opacity-50">
                  <a
                    [routerLink]="item.link"
                    class="w-6 h-6 rounded-full flex justify-center items-center"
                    [style.background-color]="item.color"
                  >
                    <i [class]="item.icon" style="color: white"></i>
                  </a>
                </li>
              }
            </ul>
            <div
              class="w-6 h-6 rounded-full flex items-center justify-center bg-chatbot-icon-bg text-white group-hover:bg-primary-orange"
            >
              <i class="fa-solid fa-share"></i>
            </div>
            <p
              class="group-hover:text-primary-orange text-transparent transition-all duration-300 py-2"
            >
              我要分享
            </p>
          </div>
          <a routerLink="/report" class="flex flex-col items-center group cursor-pointer">
            <div
              class="w-6 h-6 rounded-full flex items-center justify-center bg-chatbot-icon-bg text-white group-hover:bg-primary-orange"
            >
              <span class="cursor-pointer"><i class="fa-solid fa-flag"></i></span>
            </div>
            <p
              class="group-hover:text-primary-orange text-transparent transition-all duration-300 py-2"
            >
              我要舉報
            </p>
          </a>
          <div class="flex flex-col items-center group cursor-pointer" (click)="scrollToTop()">
            <div
              class="w-6 h-6 rounded-full flex items-center justify-center bg-chatbot-icon-bg text-white group-hover:bg-primary-orange"
            >
              <i class="fa-solid fa-arrow-up"></i>
            </div>
            <p
              class="group-hover:text-primary-orange text-transparent transition-all duration-300 py-2"
            >
              回到頂部
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="fixed right-3 bottom-[4.375rem] w-[4.5rem] flex justify-center cursor-pointer">
      <img src="/chatbot.webp" alt="chatbot" class="w-14 h-14 rounded-full" />
      <div class="absolute -bottom-3 rounded px-1.5 bg-primary-orange text-white">
        <span class="text-sm">智能客服</span>
      </div>
    </div>
  `,
  styles: ``,
})
export class RightSideChatbot {
  SharedItem: SharedList[] = [
    {
      id: 1,
      title: 'facebook',
      link: '/facebook',
      icon: 'fa-brands fa-facebook-f fa-sm',
      color: '#667eb9',
    },
    { id: 2, title: 'line', link: '/line', icon: 'fa-brands fa-line fa-sm', color: '#71c25c' },
    { id: 3, title: 'mail', link: '/mail', icon: 'fa-solid fa-envelope fa-sm', color: '#2196f3' },
    { id: 4, title: 'link', link: '/link', icon: 'fa-solid fa-link fa-sm', color: '#39c8d0' },
  ];

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
