import { Component, input } from '@angular/core';
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
@Component({
  selector: 'app-dropdown-content',
  imports: [],
  template: `
    <div class="flex flex-col gap-4">
      @for (item of items(); track item.id) {
        <h3 class="text-sm font-bold leading-5 text-side-nav-text">{{ item.title }}</h3>
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
    </div>
  `,
  styles: ``,
})
export class DropdownContent {
  items = input.required<DropdownList[]>();
}
