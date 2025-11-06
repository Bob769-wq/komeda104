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
    <div class="px-10 py-6 bg-white">
      <app-block-title label="公司環境照片(6張)" />
      <div class="flex flex-col gap-4">
        <div class="grid grid-cols-4 gap-4">
          @for (item of picItem; track item.id) {
            <img class="cursor-pointer" [src]="item.img" [alt]="item.title" />
          }
        </div>
        <a routerLink="/join-us">
          <img
            src="/company-pic/pic-hero.jpg"
            class="h-[304px] w-full object-cover"
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
  ];
}
