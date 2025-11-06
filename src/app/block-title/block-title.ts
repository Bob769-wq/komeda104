import { Component, input } from '@angular/core';

@Component({
  selector: 'app-block-title',
  imports: [],
  template: ` <h2 class="text-lg font-bold mb-5">{{ label() }}</h2> `,
  styles: ``,
})
export class BlockTitle {
  label = input.required<string>();
}
