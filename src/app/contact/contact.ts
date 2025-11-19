import { Component } from '@angular/core';
@Component({
  selector: 'app-contact',
  imports: [],
  template: `
    <div class="p-4 bg-white rounded">
      <h3 class="font-bold text-lg mb-4">聯絡方式</h3>
      <div class="flex flex-col gap-2">
        <div class="flex gap-8">
          <h3 class="font-bold text-base w-12">聯絡人</h3>
          <p class="text-base">蔡小姐</p>
        </div>
        <div class="flex gap-8">
          <h3 class="font-bold text-base w-12">電話</h3>
          <a class="font-bold text-base text-normal-blue hover:text-normal-blue-hover"
            >02-25170135</a
          >
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class Contact {}
