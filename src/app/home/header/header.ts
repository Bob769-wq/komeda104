import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
interface NavList {
  id: number;
  title: string;
  link?: string;
  children?: NavList[];
}
interface IconList {
  id: number;
  title?: string;
  img: string;
}
@Component({
  selector: 'app-header',
  imports: [RouterLink],
  template: `
    <header class="bg-white fixed top-0 left-0 right-0 z-50">
      <div class="flex justify-between items-center px-4 border-b">
        <ul class="flex flex-1 gap-3 items-center text-primary-text">
          @for (item of navItem; track item.id) {
            @if (item.link) {
              <li class="py-3 hover:text-primary-orange cursor-pointer">
                <a [routerLink]="item.link">{{ item.title }}</a>
              </li>
            } @else {
              <li class="flex gap-1 py-3 hover:text-primary-orange cursor-pointer">
                <span>{{ item.title }}</span>
                <span>
                  <i class="fa-solid fa-chevron-down " style="color: currentColor"></i>
                </span>
              </li>
            }
          }
        </ul>
        <a routerLink="/"><img src="/104logo_156x22.svg" alt="104logo" /></a>
        <div class="flex items-center justify-end gap-8 flex-1 text-lighter-text">
          <a routerLink="/story" class="text-brighter-blue hover:text-brighter-blue-hover"
            >投稿故事賺2萬</a
          >
          <ul class="flex items-center gap-6">
            @for (item of iconItem; track item.id) {
              <li class="hover:text-primary-orange cursor-pointer">
                <i [class]="item.img" style="color: currentColor"></i>
              </li>
            }
          </ul>
          <a routerLink="/login" class="font-bold hover:text-primary-orange">登入/註冊</a>
        </div>
      </div>
    </header>
  `,
  styles: ``,
})
export class Header {
  navItem: NavList[] = [
    { id: 1, title: '工作' },
    { id: 2, title: '公司' },
    { id: 3, title: '工具' },
    { id: 4, title: '職涯' },
    { id: 5, title: '學習' },
    { id: 6, title: 'APP' },
    { id: 7, title: '所有服務', link: '/service' },
  ];

  iconItem: IconList[] = [
    { id: 1, img: 'fa-solid fa-eye fa-lg' },
    { id: 2, img: 'fa-solid fa-comment fa-lg' },
    { id: 3, img: 'fa-solid fa-bell fa-lg' },
  ];
}
