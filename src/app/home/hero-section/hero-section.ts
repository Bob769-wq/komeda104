import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
interface CompanyInfoList {
  id: number;
  title: string;
  link: string;
}
@Component({
  selector: 'app-hero-section',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <div class="px-6 flex justify-between bg-white">
      <div class="flex gap-4 relative">
        <div class="w-32 h-32 absolute -top-4 shadow-md bg-white flex items-center justify-center">
          <img src="/komeda-logo.jpg" class="max-w-[120px] aspect-square" alt="komeda-logo" />
        </div>
        <div class="w-32"></div>
        <div class="flex flex-col flex-shrink-0">
          <div class="flex items-center gap-2">
            <h1 class="py-8 text-2xl font-bold">台灣客美多股份有限公司</h1>
            <a
              routerLink="/abroad"
              class="text-brighter-blue border border-brighter-blue rounded-full px-2"
              >外商</a
            >
          </div>
          <ul class="flex items-center bg-white">
            @for (item of infoItem; track item.id) {
              <li class="font-bold text-base hover:text-primary-orange">
                <a
                  [routerLink]="item.link"
                  routerLinkActive="!border-b-primary-orange text-primary-orange"
                  [routerLinkActiveOptions]="{ exact: true }"
                  class="inline-block px-4 py-3 border-b-4 border-b-transparent hover:border-b-primary-orange"
                  >{{ item.title }}</a
                >
              </li>
            }
          </ul>
        </div>
      </div>
      <div class="mt-auto text-primary-orange bg-white">
        <a
          class="inline-block cursor-pointer rounded px-16 leading-8 border border-primary-orange font-bold mb-3 hover:shadow-hover-button-shadow"
          >關注公司</a
        >
      </div>
    </div>
  `,
  styles: ``,
})
export class HeroSection {
  infoItem: CompanyInfoList[] = [
    { id: 1, title: '公司介紹', link: '/' },
    { id: 2, title: '主要商品', link: '/main-product' },
    { id: 3, title: '福利制度', link: '/benefits' },
    { id: 4, title: '工作機會(35)', link: '/job-opportunity' },
  ];
}
