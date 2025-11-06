import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
interface BenefitsList {
  id: number;
  title: string;
  link: string;
}
@Component({
  selector: 'app-tag-section',
  imports: [RouterLink],
  template: `
    <div class="mb-5">
      <h3 class="text-base font-bold mb-1">{{ title() }}</h3>
      <div class="flex flex-wrap gap-2">
        @for (item of items(); track item.id) {
          <a
            [routerLink]="item.link"
            class="rounded-full px-2 text-lighter-text bg-benefits-tag hover:text-primary-orange"
            >{{ item.title }}</a
          >
        }
      </div>
    </div>
  `,
  styles: ``,
})
export class TagSection {
  title = input.required<string>();
  items = input.required<BenefitsList[]>();
}
