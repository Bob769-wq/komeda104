import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
interface SharedList {
  id: number;
  title: string;
  link: string;
  icon: string;
  color: string;
}
@Component({
  selector: 'app-share-links',
  imports: [RouterLink],
  template: `
    <div class="p-4 bg-white rounded">
      <h3 class="font-bold text-lg mb-4">好公司分享給好朋友</h3>
      <div class="flex items-center gap-2">
        @for (item of SharedItem; track item.id) {
          <a
            [routerLink]="item.link"
            class="rounded-full h-10 w-10 flex justify-center items-center"
            [style.background-color]="item.color"
          >
            <i [class]="item.icon" style="color: white"></i>
          </a>
        }
      </div>
    </div>
  `,
  styles: ``,
})
export class ShareLinks {
  SharedItem: SharedList[] = [
    {
      id: 1,
      title: 'facebook',
      link: '/facebook',
      icon: 'fa-brands fa-facebook-f fa-lg',
      color: '#667eb9',
    },
    { id: 2, title: 'line', link: '/line', icon: 'fa-brands fa-line fa-lg', color: '#71c25c' },
    { id: 3, title: 'mail', link: '/mail', icon: 'fa-solid fa-envelope fa-lg', color: '#2196f3' },
    { id: 4, title: 'link', link: '/link', icon: 'fa-solid fa-link fa-lg', color: '#39c8d0' },
  ];
}
