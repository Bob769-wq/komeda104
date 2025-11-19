import { Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DropdownContent } from '../../dropdown-content/dropdown-content';
interface NavList {
  id: number;
  title: string;
  link?: string;
  key?: string;
  children?: NavList[];
}
interface IconList {
  id: number;
  title?: string;
  img: string;
}
interface DropdownList {
  id: number;
  title?: string;
  card: DropdownCard[];
}
interface DropdownCard {
  id: number;
  title: string;
  description: string;
  link: string;
  img: string;
}
interface AppDropDownList {
  id: number;
  img: string;
  title: string;
  link1: string;
  link2: string;
}
@Component({
  selector: 'app-header',
  imports: [RouterLink, DropdownContent],
  template: `
    <header class="bg-white fixed top-0 left-0 right-0 z-50">
      <div class="flex justify-between items-center px-4 border-b relative">
        <ul class="lg:flex flex-1 gap-3 items-center text-primary-text hidden">
          @for (item of navItem; track item.id) {
            @if (item.link) {
              <li
                class="py-3 hover:text-primary-orange cursor-pointer media-screen-1103:visible invisible"
              >
                <a [routerLink]="item.link">{{ item.title }}</a>
              </li>
            } @else if (item.key) {
              <li
                class="flex gap-1 py-3 hover:text-primary-orange cursor-pointer"
                [class.text-primary-orange]="activeDropdown() === item.key"
                (mouseenter)="showDropdown(item.key!)"
                (mouseleave)="hideDropdown()"
              >
                <span>{{ item.title }}</span>
                <span>
                  <i class="fa-solid fa-chevron-down " style="color: currentColor"></i>
                </span>
              </li>
            } @else {
              <li class="flex gap-1 py-3 hover:text-primary-orange cursor-pointer relative group">
                <span>{{ item.title }}</span>
                <span>
                  <i class="fa-solid fa-chevron-down " style="color: currentColor"></i>
                </span>
                <div
                  class="absolute top-full left-0 bg-white w-72 rounded-2xl hidden group-hover:block"
                >
                  <div class="p-7">
                    <div class="flex flex-col gap-4">
                      @for (item of appItem; track item.id) {
                        <div class="flex gap-4 items-center">
                          <div class="w-12 h-12">
                            <img [src]="item.img" class="max-w-full" [alt]="item.title" />
                          </div>
                          <div class="flex flex-col gap-2">
                            <h3 class="font-bold text-base text-black">{{ item.title }}</h3>
                            <div class="flex gap-2">
                              <a [routerLink]="item.link1"
                                ><img src="/app/app-store.png" class="w-20" [alt]="item.link1"
                              /></a>
                              <a [routerLink]="item.link2"
                                ><img
                                  src="/app/google-play.png.webp"
                                  class="w-20"
                                  [alt]="item.link2"
                              /></a>
                            </div>
                          </div>
                        </div>
                      }
                    </div>
                  </div>
                </div>
              </li>
            }
          }
        </ul>

        <a routerLink="/" class="lg:block hidden"
          ><img src="/104logo_156x22.svg" class="max-w-full " alt="104logo"
        /></a>

        <div class="lg:flex items-center justify-end gap-8 flex-1 text-lighter-text hidden">
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

        <div class="flex items-center gap-6 lg:hidden">
          <a routerLink="/back">
            <i class="fa-solid fa-chevron-left fa-lg"></i>
          </a>
          <a routerLink="/" [class]="isSticky() ? 'hidden' : 'block'">
            <img src="/104logo_156x22.svg" class="max-w-32" alt="104logo" />
          </a>
        </div>
        <h3
          class="font-bold text-base lg:hidden absolute inset-0 flex justify-center items-center"
          [class]="isSticky() ? 'block' : 'hidden'"
        >
          台灣客美多股份有限公司
        </h3>
        <div
          class="flex items-center gap-4 text-lighter-text lg:hidden justify-end"
          [class]="isSticky() ? 'invisible' : 'visible'"
        >
          <div><i class="fa-solid fa-bell fa-lg" style="color:currentColor "></i></div>
          <a routerLink="/login" class="text-primary-orange font-bold py-3">登入</a>
        </div>
      </div>

      @if (activeDropdown() !== null) {
        <div
          class="absolute top-full bg-white p-7 rounded-2xl"
          (mouseenter)="showDropdown(activeDropdown()!)"
          (mouseleave)="hideDropdown()"
        >
          @switch (activeDropdown()) {
            @case ('work') {
              <app-dropdown-content [items]="workDropdownItem" />
            }
            @case ('company') {
              @for (item of companyDropdownItem; track item.id) {
                <div class="grid grid-cols-3">
                  @for (child of item.card; track child.id) {
                    <a class="p-4 flex gap-4 hover:bg-dropdown-card-hover rounded-2xl">
                      <img [src]="child.img" class="w-6 h-6" [alt]="child.title" />
                      <div class="flex flex-col gap-2">
                        <h4 class="font-bold text-base">{{ child.title }}</h4>
                        <p>{{ child.description }}</p>
                      </div>
                    </a>
                  }
                </div>
              }
            }
            @case ('tool') {
              <app-dropdown-content [items]="toolDropdownItem" />
            }
            @case ('career') {
              <app-dropdown-content [items]="careerDropdownItem" />
            }
            @case ('learning') {
              <app-dropdown-content [items]="learningDropdownItem" />
            }
          }
        </div>
      }
    </header>
  `,
  styles: ``,
})
export class Header {
  isSticky = signal(false);
  stickyThreshold = 200;
  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollPosition = window.scrollY;
    if (scrollPosition > this.stickyThreshold) {
      this.isSticky.set(true);
    } else {
      this.isSticky.set(false);
    }
  }

  closeTimeout: any = null;
  activeDropdown = signal<string | null>(null);
  showDropdown(itemKey: string) {
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
      this.closeTimeout = null;
    }

    this.activeDropdown.set(itemKey);
  }
  hideDropdown() {
    if (this.closeTimeout) return;
    this.closeTimeout = setTimeout(() => {
      this.activeDropdown.set(null);
    }, 200);
  }

  navItem: NavList[] = [
    { id: 1, title: '工作', key: 'work' },
    { id: 2, title: '公司', key: 'company' },
    { id: 3, title: '工具', key: 'tool' },
    { id: 4, title: '職涯', key: 'career' },
    { id: 5, title: '學習', key: 'learning' },
    { id: 6, title: 'APP' },
    { id: 7, title: '所有服務', link: '/service' },
  ];

  appItem: AppDropDownList[] = [
    { id: 1, title: '104工作快找', img: '/app/104.png', link1: '/app-104', link2: '/google-tanji' },
    {
      id: 2,
      title: '打工探吉',
      img: '/app/tanji.png',
      link1: '/app-tanji',
      link2: '/google-tanji',
    },
  ];

  iconItem: IconList[] = [
    { id: 1, img: 'fa-solid fa-eye fa-lg' },
    { id: 2, img: 'fa-solid fa-comment fa-lg' },
    { id: 3, img: 'fa-solid fa-bell fa-lg' },
  ];

  workDropdownItem: DropdownList[] = [
    {
      id: 1,
      title: '多元管道',
      card: [
        {
          id: 1,
          title: '附近工作',
          link: '/work1-1',
          description: '快速找到附近好工作',
          img: '/work/1-1.png',
        },
        {
          id: 2,
          title: 'AI新機會',
          link: '/work1-2',
          description: 'AI工作與學習專區',
          img: '/work/1-2.png',
        },
        {
          id: 3,
          title: 'AI職涯顧問',
          link: '/work1-3',
          description: '您高階職涯的AI顧問',
          img: '/work/1-3.png',
        },
        {
          id: 4,
          title: '獵才顧問',
          link: '/work1-4',
          description: '中高階人才與優質企業的媒合夥伴',
          img: '/work/1-4.png',
        },
        {
          id: 5,
          title: '最新工作',
          link: '/work1-5',
          description: '找最新工作機會',
          img: '/work/1-5.png',
        },
        {
          id: 6,
          title: '職涯博覽會',
          link: '/work1-6',
          description: '歷年精彩回顧、2026敬請期待',
          img: '/work/1-6.png',
        },
      ],
    },
    {
      id: 2,
      title: '族群專屬',
      card: [
        {
          id: 1,
          title: '轉職專區',
          link: '/work2-1',
          description: '轉職特選內容',
          img: '/work/2-1.png',
        },
        {
          id: 2,
          title: '新鮮人專區',
          link: '/work2-2',
          description: '畢業找理想工作',
          img: '/work/2-2.png',
        },
        {
          id: 3,
          title: '學生打工實習',
          link: '/work2-3',
          description: '打工實習專屬平台',
          img: '/work/2-3.png',
        },
        {
          id: 4,
          title: '身心障礙',
          link: '/work2-4',
          description: '幫你找身心障礙工作',
          img: '/work/2-4.png',
        },
        {
          id: 5,
          title: '志工服務',
          link: '/work2-5',
          description: '幫你找志工服務機會',
          img: '/work/2-5.png',
        },
        {
          id: 6,
          title: '數位科技專區',
          link: '/work2-6',
          description: '數位人才專屬媒合平台',
          img: '/work/2-6.png',
        },
      ],
    },
  ];
  companyDropdownItem: DropdownList[] = [
    {
      id: 1,
      card: [
        {
          id: 1,
          title: '推薦好公司',
          img: '/company/01.png',
          description: '為你推薦的好公司',
          link: '/company/01',
        },
        {
          id: 2,
          title: '百萬年薪企業',
          img: '/company/02.png',
          description: '上市櫃薪資排行榜',
          link: '/company/02',
        },
        {
          id: 3,
          title: '外商公司',
          img: '/company/03.png',
          description: '外商公司總整理',
          link: '/company/03',
        },
        {
          id: 4,
          title: '科技園區',
          img: '/company/04.png',
          description: '竹科、南科通通有',
          link: '/company/04',
        },
        {
          id: 5,
          title: '半導體公司',
          img: '/company/05.png',
          description: '精選半導體特輯',
          link: '/company/05',
        },
      ],
    },
  ];
  toolDropdownItem: DropdownList[] = [
    {
      id: 1,
      title: '求職秘技',
      card: [
        {
          id: 1,
          title: '履歷範本',
          img: '/tools/1-1.png',
          description: '真實的履歷提供參考',
          link: '/tools1-1',
        },
        {
          id: 2,
          title: '履歷診療室',
          img: '/tools/1-2.png',
          description: '免費線上履歷健診',
          link: '/tools1-2',
        },
        {
          id: 3,
          title: '薪資情報',
          img: '/tools/1-3.png',
          description: '最新的薪資報告',
          link: '/tools1-3',
        },
        {
          id: 4,
          title: '公司評論',
          img: '/tools/1-4.png',
          description: '匿名員工評論',
          link: '/tools/1-1',
        },
        {
          id: 5,
          title: '職業適性測驗',
          img: '/tools/1-5.png',
          description: '找到適合自己的天職',
          link: '/tools1-4',
        },
        {
          id: 6,
          title: '職業價值觀測驗',
          img: '/tools/1-6.png',
          description: '找到你的夢幻公司',
          link: '/tools1-5',
        },
      ],
    },
    {
      id: 2,
      title: '探索與升學',
      card: [
        {
          id: 1,
          title: '工作世界',
          img: '/tools/2-1.png',
          description: '帶你探索各行各業',
          link: '/tools2-1',
        },
        {
          id: 2,
          title: '生涯興趣測驗',
          img: '/tools/2-2.png',
          description: '你的靈魂住著哪位名人',
          link: '/tools2-2',
        },
        {
          id: 3,
          title: '升學就業地圖',
          img: '/tools/2-3.png',
          description: '了解畢業出路、薪資行情',
          link: '/tools2-3',
        },
        {
          id: 4,
          title: '高中落點分析',
          img: '/tools/2-4.png',
          description: '精準動態落點、科系介紹',
          link: '/tools2-4',
        },
        {
          id: 5,
          title: '高中職學習歷程',
          img: '/tools/2-5.png',
          description: '優秀範本參考、學檔美編神器',
          link: '/tools2-5',
        },
      ],
    },
  ];
  careerDropdownItem: DropdownList[] = [
    {
      id: 1,
      title: '規劃與諮詢',
      card: [
        {
          id: 1,
          title: '履歷診療室',
          img: '/career/1-1.png',
          description: '免費線上履歷健診',
          link: '/career1-1',
        },
        {
          id: 2,
          title: '免費職涯諮詢',
          img: '/career/1-2.png',
          description: '前輩幫你釐清求職方向',
          link: '/career1-2',
        },
        {
          id: 3,
          title: '個人職涯分析',
          img: '/career/1-3.png',
          description: '職涯路徑與轉職建議',
          link: '/career1-3',
        },
        {
          id: 4,
          title: '職場問答',
          img: '/career/1-4.png',
          description: '公開問答平台',
          link: '/career1-4',
        },
        {
          id: 5,
          title: '職涯導航',
          img: '/career/1-5.png',
          description: '一起探索職涯規劃',
          link: '/career1-5',
        },
        {
          id: 6,
          title: '付費顧問諮詢',
          img: '/career/1-6.png',
          description: '職場前輩進階諮詢',
          link: '/career1-6',
        },
      ],
    },
    {
      id: 2,
      title: '社群與人脈',
      card: [
        {
          id: 1,
          title: 'Be A Giver',
          img: '/career/2-1.png',
          description: '一起來幫助需要的人',
          link: '/career2-1',
        },
        {
          id: 2,
          title: '人才社群',
          img: '/career/2-2.png',
          description: '串聯你的職涯人脈網絡',
          link: '/career2-2',
        },
      ],
    },
  ];
  learningDropdownItem: DropdownList[] = [
    {
      id: 1,
      title: '學習成長',
      card: [
        {
          id: 1,
          title: '課程中心',
          img: '/learning/1-1.png',
          link: '/learning1-1',
          description: '技能、考照、轉職一站式增能學習',
        },
        {
          id: 2,
          title: '證照中心',
          img: '/learning/1-2.png',
          link: '/learning1-2',
          description: '職場熱門證照，考試資訊一站查詢',
        },
        {
          id: 3,
          title: '測驗中心',
          img: '/learning/1-3.png',
          link: '/learning1-3',
          description: '職場能力檢測，免費測你的專業力',
        },
        {
          id: 4,
          title: '共學教室',
          img: '/learning/1-4.png',
          link: '/learning1-4',
          description: '共學成長，開啟學習新視野',
        },
        {
          id: 5,
          title: '職場力',
          img: '/learning/1-5.png',
          link: '/learning1-5',
          description: '求職到職場萬篇好文充電',
        },
        {
          id: 6,
          title: '活動吧',
          img: '/learning/1-6.png',
          link: '/learning1-6',
          description: '找職涯活動、辦活動都靠活動吧',
        },
      ],
    },
    {
      id: 2,
      title: 'Podcast',
      card: [
        {
          id: 1,
          title: '青春通識課播客',
          img: '/learning/2-1.png',
          link: '/learning2-1',
          description: '陪年輕人找方向',
        },
        {
          id: 2,
          title: '職涯診所播客',
          img: '/learning/2-2.png',
          link: '/learning2-2',
          description: '解決職場大小事，職場沒這麼難',
        },
        {
          id: 3,
          title: '高年級不打烊播客',
          img: '/learning/2-3.png',
          link: '/learning2-3',
          description: '用AI點亮第二人生',
        },
      ],
    },
  ];
}
