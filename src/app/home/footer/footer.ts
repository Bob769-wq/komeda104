import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
interface FooterList {
  id: number;
  icon?: string;
  title: string;
  link: string;
}
@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <div class="sticky bottom-0 lg:hidden">
      <div class="px-4 py-3 bg-white flex gap-3">
        <button
          class="min-w-32 px-3 py-2 text-center rounded text-lg font-bold border border-lighter-orange hover:shadow-hover-button-shadow text-lighter-orange"
        >
          關注
        </button>
        <a
          routerLink="/opportunity"
          class="bg-lighter-orange rounded font-bold text-lg text-white w-full flex justify-center items-center hover:bg-primary-orange"
        >
          <span>工作機會(35)</span>
        </a>
      </div>
    </div>
    <footer class="bg-primary-text py-2 text-white">
      <div class="px-4 flex flex-col lg:flex-row items-center gap-1 justify-between">
        <div class="lg:flex gap-2.5 items-center hidden">
          @for (item of footerItem; track item.id; let last = $last) {
            <a
              [routerLink]="item.link"
              class="text-white text-xs flex gap-0.5 items-center hover:text-primary-orange"
            >
              @if (item.icon) {
                <span>
                  <i [class]="item.icon"></i>
                </span>
              }
              <span>{{ item.title }}</span>
            </a>
            @if (!last) {
              <span>|</span>
            }
          }
        </div>
        <div class="flex gap-2.5 items-center lg:hidden">
          @for (item of mobileItem; track item.id; let last = $last) {
            <a [routerLink]="item.link" class="text-white text-xs flex gap-0.5 items-center">
              @if (item.icon) {
                <span>
                  <i [class]="item.icon"></i>
                </span>
              }
              <span>{{ item.title }}</span>
            </a>
            @if (!last) {
              <span>|</span>
            }
          }
        </div>
        <div class="flex text-xs">
          <p class="mr-1">一零四資訊科技股份有限公司 版權所有 © 2025</p>
          <p class="mr-3 lg:block hidden">建議瀏覽器 chrome / edge</p>
          <a
            routerLink="/notice"
            class="text-lighter-text hover:text-primary-orange hidden lg:block"
            >10/1起關閉支援TLS1.1</a
          >
        </div>
      </div>
    </footer>
  `,
  styles: ``,
})
export class Footer {
  footerItem: FooterList[] = [
    { id: 1, title: '104客服', icon: 'fa-solid fa-phone', link: '/footer1' },
    { id: 2, title: '常見問題', link: '/footer2' },
    { id: 3, title: '職場安全諮詢', link: '/footer3' },
    { id: 4, title: '隱私中心', link: '/footer4' },
  ];

  mobileItem: FooterList[] = [
    { id: 2, title: '常見問題', link: '/footer2' },
    { id: 2, title: '意見回饋', link: '/footer5' },
    { id: 4, title: '隱私中心', link: '/footer4' },
  ];
}
