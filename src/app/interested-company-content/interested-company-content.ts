import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
interface InterestedList {
  id: number;
  title: string;
  link: string;
  district: string;
}
type StyleVariant = 'sidenav' | 'mobile';
@Component({
  selector: 'app-interested-company-content',
  imports: [RouterLink],
  template: `
    <div class="p-4 bg-white rounded">
      <h3 class="font-bold text-lg mb-4" [class]="headingSize()">你可能有興趣的公司</h3>
      <div class="flex flex-col">
        @for (item of interestedItem(); track item.id; let last = $last) {
          <a [routerLink]="item.link" [class]="itemClass()" [class.border-b]="!last">
            <h4 [class]="titleClass()">
              {{ item.title }}
            </h4>
            <h5 [class]="districtClass()">{{ item.district }}</h5>
          </a>
        }
      </div>
      <a
        routerLink="/more"
        class="flex justify-center items-center gap-2 pt-3 hover:text-primary-orange text-lighter-text"
      >
        <span class="font-bold" [class.text-base]="variant() === 'sidenav'">{{ moreText() }}</span>
        <span><i class="fa-solid fa-lg" [class]="chevronIcon()"></i></span>
      </a>
    </div>
  `,
  styles: ``,
})
export class InterestedCompanyContent {
  variant = input.required<StyleVariant>();
  interestedItem = input.required<InterestedList[]>();

  titleClass() {
    return this.variant() === 'sidenav'
      ? 'font-bold line-clamp-1'
      : 'font-bold text-normal-blue hover:text-normal-blue-hover text-base line-clamp-1';
  }

  districtClass() {
    return this.variant() === 'sidenav' ? '' : 'text-side-nav-text';
  }

  itemClass() {
    return this.variant() === 'sidenav'
      ? 'flex flex-col hover:text-primary-orange pb-4 text-sm text-lighter-text'
      : 'flex flex-col gap-1 pb-4';
  }

  headingSize() {
    return this.variant() === 'sidenav' ? 'text-base' : 'text-lg';
  }

  moreText() {
    return this.variant() === 'sidenav' ? '看更多' : '看更多公司';
  }

  chevronIcon() {
    return this.variant() === 'sidenav' ? 'fa-chevron-right' : 'fa-chevron-down';
  }
}
