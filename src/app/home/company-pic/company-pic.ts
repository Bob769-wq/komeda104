import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlockTitle } from '../../block-title/block-title';
interface PictureList {
  id: number;
  img: string;
  title: string;
}
@Component({
  selector: 'app-company-pic',
  imports: [RouterLink, BlockTitle],
  template: `
    <div class="lg:px-10 py-6 px-4 bg-white rounded">
      <app-block-title label="公司環境照片(6張)" />
      <div class="flex flex-col gap-4">
        <div class="lg:grid grid-cols-4 gap-4 hidden">
          @for (item of picItem; track item.id; let i = $index) {
            <img
              class="cursor-pointer"
              [class.hidden]="i > 3"
              [src]="item.img"
              [alt]="item.title"
            />
          }
        </div>
        <div class="lg:hidden flex overflow-x-auto gap-1">
          @for (item of picItem; track item.id) {
            <img class="cursor-pointer max-w-44 max-h-32" [src]="item.img" [alt]="item.title" />
          }
        </div>
        <a routerLink="/join-us">
          <img
            src="/company-pic/pic-hero.jpg"
            class="lg:h-company-hero-pic h-company-hero-pic-mobile w-full lg:object-cover object-contain"
            alt="pic-hero"
          />
        </a>
      </div>
    </div>
  `,
  styles: ``,
})
export class CompanyPic {
  picItem: PictureList[] = [
    { id: 1, title: 'pic01', img: '/company-pic/pic01.jpg' },
    { id: 2, title: 'pic02', img: '/company-pic/pic02.jpg' },
    { id: 3, title: 'pic03', img: '/company-pic/pic03.jpg' },
    { id: 4, title: 'pic04', img: '/company-pic/pic04.jpg' },
    { id: 5, title: 'pic05', img: '/company-pic/pic05.jpg' },
    { id: 6, title: 'pic06', img: '/company-pic/pic06.jpg' },
  ];
}
