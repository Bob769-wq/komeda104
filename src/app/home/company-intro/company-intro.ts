import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlockTitle } from '../../block-title/block-title';
interface IntroList {
  id: number;
  title: string;
  data?: string;
  link?: string;
  clickable?: string;
  topic?: string;
  addition?: string;
}

interface LinkList {
  id: number;
  text: string;
  url: string;
}

interface SocialList {
  id: number;
  name: 'facebook' | 'instagram' | string;
  icon: string;
  url: string;
  color: string;
}

interface WebsiteList {
  id: number;
  title: string;
  type: 'website';
  url: string;
}

interface RelatedLinksList {
  id: number;
  title: string;
  type: 'related-links';
  links: LinkList[];
}

interface SocialLinkList {
  id: number;
  title: string;
  type: 'social-links';
  socials: SocialList[];
}

type DownIntroList = WebsiteList | RelatedLinksList | SocialLinkList;

@Component({
  selector: 'app-company-intro',
  imports: [RouterLink, BlockTitle],
  template: `
    <section id="intro">
      <div
        class="lg:pt-6 pt-4 px-4 lg:px-10 bg-white rounded"
        [class]="showDetails() ? 'pb-6' : 'pb-4'"
      >
        <app-block-title label="公司介紹" />
        <div class="flex flex-col gap-2">
          <div class="lg:grid grid-cols-2 gap-y-2 hidden">
            @for (item of introItem; track item.id; let last = $last) {
              <div class="flex items-center">
                <h4 class="font-bold text-base min-w-20">{{ item.title }}</h4>
                @if (item.clickable) {
                  <div class="flex gap-3 items-center text-base">
                    @if (item.data !== undefined) {
                      <span>{{ item.data }}</span>
                    }
                    <a
                      [routerLink]="item.link"
                      class="text-normal-blue hover:text-normal-blue-hover"
                      >{{ item.clickable }}</a
                    >
                  </div>
                } @else if (last) {
                  <div class="flex gap-1 items-center">
                    <span class="text-base">{{ item.data }}</span>
                    <a [routerLink]="item.link">
                      <i class="fa-solid fa-location-dot" style="color: #ff7800"></i>
                    </a>
                  </div>
                } @else {
                  <span class="text-base">{{ item.data }}</span>
                }
              </div>
            }
          </div>
          <div class="grid gap-y-2 lg:hidden">
            @for (item of mobileIntroItem; track item.id; let first = $first) {
              <div class="flex items-center">
                <h4 class="font-bold text-base min-w-20">{{ item.title }}</h4>
                @if (item.clickable) {
                  <div class="flex gap-3 items-center text-base">
                    @if (item.data !== undefined) {
                      <span>{{ item.data }}</span>
                    }
                    <a
                      [routerLink]="item.link"
                      class="text-normal-blue font-bold lg:font-normal hover:text-normal-blue-hover"
                      >{{ item.clickable }}</a
                    >
                  </div>
                } @else if (first) {
                  <div class="flex gap-1 items-center">
                    <span class="text-base">{{ item.data }}</span>
                    <a [routerLink]="item.link">
                      <i class="fa-solid fa-location-dot" style="color: #ff7800"></i>
                    </a>
                  </div>
                } @else {
                  <span class="text-base">{{ item.data }}</span>
                }
              </div>
            }
          </div>
          <div class="grid gap-y-2">
            @for (item of downIntroItem; track item.id) {
              <div class="flex items-start" [class.items-center]="item.id === 3">
                <h4 class="font-bold text-base min-w-20">{{ item.title }}</h4>
                <div class="text-base flex-grow">
                  @switch (item.type) {
                    @case ('website') {
                      <a
                        [href]="item.url"
                        target="_blank"
                        class="text-normal-blue font-bold lg:font-normal hover:text-normal-blue-hover"
                      >
                        {{ item.url }}
                      </a>
                    }
                    @case ('related-links') {
                      <div class="flex flex-wrap gap-2">
                        @for (link of item.links; track link.id; let last = $last) {
                          <a
                            [routerLink]="link.url"
                            class="text-normal-blue font-bold lg:font-normal hover:text-normal-blue-hover"
                          >
                            {{ link.text }}
                          </a>
                          @if (!last) {
                            <span class="">|</span>
                          }
                        }
                      </div>
                    }
                    @case ('social-links') {
                      <div class="flex gap-2">
                        @for (social of item.socials; track social.id) {
                          <a
                            [routerLink]="social.url"
                            class="w-8 h-8 flex justify-center items-center rounded-full"
                            [style.background-color]="social.color"
                          >
                            <i [class]="social.icon" style="color: white"></i>
                          </a>
                        }
                      </div>
                    }
                  }
                </div>
              </div>
            }
          </div>
          <hr class="my-3 border-t" />
        </div>
        <h4 class="text-base font-bold">公司簡介</h4>
        <p class="mt-3 text-base">
          源自1968年日本名古屋的客美多咖啡KOMEDA′S Coffee，<br />
          向來以提供如同自家客廳般舒適放鬆的氛圍及真心待客的服務聞名，<br />
          希望每位來到客美多咖啡的顧客在品嘗咖啡的同時，也都能夠體驗到最純粹的客美多魅力。<br />
        </p>
        <div [class.hidden]="!showDetails()">
          <div class="mt-7">
            <h4 class="text-base font-bold">經營理念</h4>
            <p class="mt-5 text-base">
              對於餐點與環境的要求，我們追求從裝潢、餐點到服務都與日本相同，給予消費者最好的用餐體驗。
            </p>
          </div>
        </div>

        <div class="flex justify-center" [class.hidden]="showDetails()">
          <div
            class="px-3 pt-3 font-bold text-sm text-lighter-text flex gap-1 hover:text-primary-orange cursor-pointer"
            (click)="toggleDetails()"
          >
            <span>顯示全部</span>
            <span>
              <i class="fa-solid fa-chevron-down fa-lg" style="color: currentColor"></i>
            </span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class CompanyIntro {
  showDetails = signal(false);
  toggleDetails() {
    this.showDetails.set(true);
  }

  introItem: IntroList[] = [
    { id: 1, title: '產業類別', clickable: '餐館業', link: '/food' },
    { id: 2, title: '聯絡人', data: '蔡小姐' },
    { id: 3, title: '產業描述', data: '餐廳/餐館' },
    { id: 4, title: '電話', data: '02-25170135' },
    { id: 5, title: '資本額', data: '3650萬元', link: '/capital', clickable: '經濟部商業司查詢' },
    { id: 6, title: '傳真', data: '暫不提供' },
    { id: 7, title: '員工人數', data: '70人' },
    { id: 8, title: '地址', data: '台北市中山區復興北路48號9樓 ', link: '/map' },
  ];

  mobileIntroItem: IntroList[] = [
    { id: 1, title: '地址', data: '台北市中山區復興北路48號9樓 ', link: '/map' },
    { id: 2, title: '產業類別', clickable: '餐館業', link: '/food' },
    { id: 3, title: '產業描述', data: '餐廳/餐館' },
    { id: 4, title: '資本額', data: '3650萬元', link: '/capital', clickable: '經濟部商業司查詢' },
    { id: 5, title: '員工人數', data: '70人' },
  ];

  downIntroItem: DownIntroList[] = [
    { id: 1, title: '公司網址', type: 'website', url: 'http://komeda.com.tw/' },
    {
      id: 2,
      title: '相關連結',
      type: 'related-links',
      links: [
        {
          id: 1,
          url: '/komeda-taiwan',
          text: '台灣官網',
        },
        {
          id: 2,
          url: '/komeda-menu',
          text: '菜單',
        },
        {
          id: 3,
          url: '/komeda-store',
          text: '分店資訊',
        },
        {
          id: 4,
          url: '/komeda-franchise',
          text: '加盟資訊',
        },
        {
          id: 5,
          url: '/komeda-japan',
          text: '日本官網',
        },
      ],
    },
    {
      id: 3,
      title: '社群連結',
      type: 'social-links',
      socials: [
        {
          id: 1,
          name: 'facebook',
          icon: 'fa-brands fa-facebook-f',
          color: '#3b5998',
          url: '/facebook',
        },
        {
          id: 2,
          name: 'instagram',
          icon: 'fa-brands fa-instagram fa-xl',
          color: '#ec0660',
          url: '/instagram',
        },
      ],
    },
  ];
}
