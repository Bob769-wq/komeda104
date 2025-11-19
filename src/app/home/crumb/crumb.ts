import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
interface CrumbList {
  id: number;
  title: string;
  link: string;
}
@Component({
  selector: 'app-crumb',
  imports: [RouterLink],
  template: `
    <div class="hidden lg:block lg:max-w-984 media-screen-1366:max-w-1224 mx-auto px-3">
      <div class="flex items-center justify-between py-1 mt-header-height">
        <ul class="flex gap-2">
          @for (item of crumbItem; track item.id; let last = $last) {
            <li class="flex gap-2">
              @if (!last) {
                <a
                  [routerLink]="item.link"
                  class="text-normal-blue hover:text-normal-blue-hover whitespace-nowrap overflow-hidden text-ellipsis max-w-36 inline-block"
                  >{{ item.title }}</a
                >
              } @else {
                <span
                  class="text-primary-text whitespace-nowrap overflow-hidden text-ellipsis max-w-36 inline-block"
                  title="{{ item.title }}"
                >
                  {{ item.title }}
                </span>
              }

              <span [class]="last ? 'hidden' : 'flex text-lighter-text'">/</span>
            </li>
          }
        </ul>
        <div class="flex flex-col">
          <select class="border border-translate-border rounded my-1">
            <option value>請選擇語言</option>
            <option value="ja">日文</option>
            <option value="en">英文</option>
            <option value="vi">越南文</option>
          </select>
          <div class="flex items-center text-xs">
            <span>由「</span>
            <a
              href="https://translate.google.com"
              class="flex items-center gap-0.5"
              target="_blank"
            >
              <img src="/google-logo.png" width="37" height="14" alt="google" />
              <span class="font-bold">翻譯</span>
            </a>
            <span>」技術提供</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class Crumb {
  crumbItem: CrumbList[] = [
    { id: 1, title: '104人力銀行', link: '/104' },
    { id: 2, title: '找公司', link: '/find-company' },
    { id: 3, title: '台灣客美多股份有限公司', link: '/' },
  ];
}
