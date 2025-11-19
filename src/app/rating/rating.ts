import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
interface ThumbUp {
  id: number;
  icon: string;
}
@Component({
  selector: 'app-rating',
  imports: [RouterLink],
  template: `
    <div class="p-4 bg-white rounded">
      <h3 class="font-bold text-lg mb-4">公司評價</h3>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <p class="text-4xl font-bold">5.0</p>
          <div class="flex gap-1">
            @for (item of thumbItem; track item.id) {
              <span><i [class]="item.icon" style="color: #ff7800"></i></span>
            }
          </div>
        </div>

        <a
          routerLink="/rating"
          class="border flex justify-center items-center py-1 px-4 border-primary-orange text-primary-orange
           rounded hover:shadow-hover-button-shadow"
        >
          <span class="font-bold">看完整評價</span>
        </a>
      </div>
    </div>
  `,
  styles: ``,
})
export class Rating {
  thumbItem: ThumbUp[] = [
    { id: 1, icon: 'fa-solid fa-thumbs-up fa-lg' },
    { id: 2, icon: 'fa-solid fa-thumbs-up fa-lg' },
    { id: 3, icon: 'fa-solid fa-thumbs-up fa-lg' },
    { id: 4, icon: 'fa-solid fa-thumbs-up fa-lg' },
    { id: 5, icon: 'fa-solid fa-thumbs-up fa-lg' },
  ];
}
