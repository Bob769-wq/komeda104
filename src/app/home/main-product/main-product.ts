import { Component } from '@angular/core';
import { BlockTitle } from '../../block-title/block-title';
interface PictureList {
  id: number;
  img: string;
  title: string;
}
@Component({
  selector: 'app-main-product',
  imports: [BlockTitle],
  template: `
    <section id="main-product">
      <div class="lg:px-10 py-6 px-4  bg-white rounded">
        <app-block-title label="主要商品 / 服務項目" />
        <div class="flex flex-col lg:flex-row lg:justify-between">
          <p class="text-base">咖啡、各類飲品、三明治、漢堡、甜品</p>
          <img
            src="/main-product/product01.jpg"
            class="max-w-56 aspect-[3/2] hidden lg:block"
            alt="product"
          />
          <div class="mt-4 flex overflow-x-auto gap-1">
            @for (item of productImg; track item.id) {
              <img [src]="item.img" [alt]="item.title" class="max-w-44 max-h-32 cursor-pointer" />
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class MainProduct {
  productImg: PictureList[] = [
    { id: 1, title: 'pic01', img: '/main-product/product01.jpg' },
    { id: 2, title: 'pic02', img: '/main-product/product02.jpg' },
    { id: 3, title: 'pic03', img: '/main-product/product03.jpg' },
    { id: 4, title: 'pic04', img: '/main-product/product04.jpg' },
    { id: 5, title: 'pic05', img: '/main-product/product05.jpg' },
  ];
}
