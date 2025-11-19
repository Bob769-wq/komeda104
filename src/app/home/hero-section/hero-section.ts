import { Component, HostListener, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ViewportScroller } from '@angular/common';
interface CompanyInfoList {
  id: number;
  title: string;
  link: string;
}
@Component({
  selector: 'app-hero-section',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <div
      class="sticky top-header-height z-30 lg:mb-4 border-b lg:border-none transition-colors duration-100 ease-in-out"
      [class.bg-white]="isSticky()"
      [class.lg:shadow-md]="isSticky()"
    >
      <div class="lg:max-w-984 media-screen-1366:max-w-1224 mt-3 lg:mt-0 mx-auto lg:px-3">
        <div class="lg:px-6 flex justify-between bg-white rounded-b">
          <div class="flex gap-4 relative">
            <div class="w-32 lg:flex justify-center hidden">
              <img
                src="/komeda-logo.jpg"
                class="w-12 h-12"
                alt="logo"
                [class]="isSticky() ? 'block' : 'hidden'"
              />
            </div>
            <div class="flex flex-col flex-shrink-0">
              <ul class="flex items-center lg:hidden">
                @for (item of mobileInfoItem; track item.id) {
                  <li
                    class="font-bold text-base hover:text-primary-orange cursor-pointer"
                    (click)="scrollToSection(item.link)"
                  >
                    <a
                      [class.!border-b-primary-orange]="activeSection === item.link"
                      [class.text-primary-orange]="activeSection === item.link"
                      class="inline-block px-4 py-3 border-b-4 border-b-transparent hover:border-b-primary-orange"
                      >{{ item.title }}</a
                    >
                  </li>
                }
              </ul>
              <ul class="lg:flex items-center hidden">
                @for (item of infoItem; track item.id) {
                  <li
                    class="font-bold text-base hover:text-primary-orange cursor-pointer"
                    (click)="scrollToSection(item.link)"
                  >
                    <a
                      [class.!border-b-primary-orange]="activeSection === item.link"
                      [class.text-primary-orange]="activeSection === item.link"
                      class="inline-block px-4 py-3 border-b-4 border-b-transparent hover:border-b-primary-orange"
                      >{{ item.title }}</a
                    >
                  </li>
                }
              </ul>
            </div>
          </div>
          <div class="mt-auto text-primary-orange hidden lg:block">
            <a
              class="inline-block cursor-pointer rounded px-16 leading-8 border border-primary-orange font-bold mb-3 hover:shadow-hover-button-shadow"
              >關注公司</a
            >
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class HeroSection {
  isSticky = signal(false);
  stickyThreshold = 475;
  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollPosition = window.scrollY;
    if (scrollPosition > this.stickyThreshold) {
      this.isSticky.set(true);
    } else {
      this.isSticky.set(false);
    }

    const sections = ['intro', 'main-product', 'benefits', 'job-opportunity'];
    const checkPosition = scrollPosition + 100;

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;

        if (checkPosition >= offsetTop && checkPosition < offsetBottom) {
          this.activeSection = sectionId;
          break;
        }
      }
    }
  }

  router = inject(Router);

  activeSection = 'intro';
  scrollToSection(sectionId: string) {
    this.activeSection = sectionId;
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }
  infoItem: CompanyInfoList[] = [
    { id: 1, title: '公司介紹', link: 'intro' },
    { id: 2, title: '主要商品', link: 'main-product' },
    { id: 3, title: '福利制度', link: 'benefits' },
    { id: 4, title: '工作機會(35)', link: 'job-opportunity' },
  ];
  mobileInfoItem: CompanyInfoList[] = [
    { id: 1, title: '公司', link: 'intro' },
    { id: 2, title: '商品', link: 'main-product' },
    { id: 3, title: '福利', link: 'benefits' },
    { id: 4, title: '工作(35)', link: 'job-opportunity' },
  ];
}
