import { Component } from '@angular/core';
import { BlockTitle } from '../../block-title/block-title';

@Component({
  selector: 'app-main-product',
  imports: [BlockTitle],
  template: `
    <div class="px-10 py-6 bg-white">
      <app-block-title label="主要商品 / 服務項目" />
      <div class="flex justify-between">
        <p class="text-base">咖啡、各類飲品、三明治、漢堡、甜品</p>
        <img src="/main-product/product01.jpg" class="max-w-56 aspect-[3/2]" alt="product" />
      </div>
    </div>
  `,
  styles: ``,
})
export class MainProduct {}
