import { Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InterestedCompanyContent } from '../../interested-company-content/interested-company-content';
interface ThumbUp {
  id: number;
  icon: string;
}
interface InterestedList {
  id: number;
  title: string;
  link: string;
  district: string;
}
@Component({
  selector: 'app-sidenav',
  imports: [RouterLink, InterestedCompanyContent],
  template: `
    <div class="flex flex-col gap-4" [class]="isFixed() ? 'fixed bottom-16 w-56' : 'relative'">
      <div class="p-4 bg-white rounded">
        <h3 class="font-bold text-base mb-4">最新消息</h3>
        <p class="text-side-nav-text max-h-14 text-sm leading-5">
          林口三井&誠品站前 新進正職另提供限時每月職務津貼 誠摯邀請您加入我們~
        </p>
      </div>
      <div class="p-4 bg-white rounded">
        <h3 class="font-bold text-base mb-4">公司評價</h3>
        <div class="flex items-center gap-2 mb-6">
          <p class="text-4xl ml-5">5.0</p>
          <div class="flex gap-1">
            @for (item of thumbItem; track item.id) {
              <span><i [class]="item.icon" style="color: #ff7800"></i></span>
            }
          </div>
        </div>

        <a
          routerLink="/rating"
          class="border flex justify-center border-primary-orange text-primary-orange
          leading-8 rounded w-full"
        >
          <span class="font-bold">看完整評價</span>
        </a>
      </div>

      <a href="http://komeda.com.tw" target="_blank">
        <img
          src="/sidenav/sidenav-pic.jpg"
          class="w-full object-cover rounded aspect-[4/9]"
          alt="sidenav"
        />
      </a>

      <div class="p-4 bg-white rounded">
        <h3 class="font-bold text-base mb-4">瀏覽公司紀錄</h3>
        <div class="pb-4">
          <a
            routerLink="/store1"
            class="line-clamp-1 font-bold hover:text-primary-orange text-lighter-text"
            >Komeda's Coffee 客美多咖啡_專成國際股份有限公司
          </a>
        </div>
      </div>

      <app-interested-company-content [interestedItem]="interestedItem" variant="sidenav" />
    </div>
  `,
  styles: ``,
})
export class Sidenav {
  isFixed = signal(false);
  FixedThreshold = 1400;
  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollPosition = window.scrollY;
    if (scrollPosition > this.FixedThreshold) {
      this.isFixed.set(true);
    } else {
      this.isFixed.set(false);
    }
  }

  thumbItem: ThumbUp[] = [
    { id: 1, icon: 'fa-solid fa-thumbs-up fa-lg' },
    { id: 2, icon: 'fa-solid fa-thumbs-up fa-lg' },
    { id: 3, icon: 'fa-solid fa-thumbs-up fa-lg' },
    { id: 4, icon: 'fa-solid fa-thumbs-up fa-lg' },
    { id: 5, icon: 'fa-solid fa-thumbs-up fa-lg' },
  ];

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
