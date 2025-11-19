import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
interface InterestedList {
  id: number;
  title: string;
  link: string;
  district: string;
}
@Component({
  selector: 'app-interested',
  imports: [RouterLink],
  template: `
    <div class="p-4 bg-white rounded">
      <h3 class="font-bold text-lg mb-4">你可能有興趣的公司</h3>
      <div class="flex flex-col">
        @for (item of interestedItem; track item.id; let last = $last) {
          <a
            [routerLink]="item.link"
            class="flex flex-col gap-1 pb-4"
            [class]="last ? 'border-b' : 'border-none'"
          >
            <h4
              class="font-bold text-normal-blue hover:text-normal-blue-hover text-base line-clamp-1"
            >
              {{ item.title }}
            </h4>
            <h5 class="text-side-nav-text">{{ item.district }}</h5>
          </a>
        }
      </div>
      <a
        routerLink="/more"
        class="flex justify-center items-center gap-2 pt-3 hover:text-primary-orange text-lighter-text"
      >
        <span class="font-bold text-base">看更多公司</span>
        <span><i class="fa-solid fa-chevron-down fa-lg"></i></span>
      </a>
    </div>
  `,
  styles: ``,
})
export class Interested {
  interestedItem: InterestedList[] = [
    { id: 1, title: '客美多咖啡中山店_盛枝有限公司', district: '台北市中山區', link: '/store1' },
    {
      id: 2,
      title: '好食餐飲集團_好食國際投資股份有限公司',
      district: '台北市士林區',
      link: '/store2',
    },
    {
      id: 3,
      title: '客美多咖啡 Komeda’s Coffee(士林店)_果磊有限公司',
      district: '台北市中正區',
      link: '/store3',
    },
    {
      id: 4,
      title: "Komeda's Coffee 客美多咖啡_專成國際股份有限公司",
      district: '台北市中山區',
      link: '/store4',
    },
    { id: 5, title: '路易莎職人咖啡股份有限公司', district: '台南市北區', link: '/store5' },
    {
      id: 6,
      title: "Komeda's Coffee 客美多咖啡林口長庚店_宜達恆飲食有限公司",
      district: '台北市信義區',
      link: '/store6',
    },
  ];
}
