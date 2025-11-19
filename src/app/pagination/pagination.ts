import { Component, signal, WritableSignal, forwardRef } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
interface PageList {
  id: number;
  title: string;
}
@Component({
  selector: 'app-pagination',
  imports: [FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Pagination),
      multi: true,
    },
  ],
  template: `
    <div class="relative">
      <div
        class="flex items-center gap-1 text-lighter-text hover:text-primary-orange cursor-pointer"
        (click)="toggleDropdown()"
      >
        <span>{{ selectedPage() }}</span>
        <span><i class="fa-solid fa-chevron-down"></i> </span>
      </div>
      @if (isOpen()) {
        <ul
          class="absolute top-full z-30 left-0 bg-white border-2 border-primary-orange min-w-24 rounded"
        >
          @for (item of pageItem; track item.id) {
            <li class="p-2 cursor-pointer" (click)="selectOption(item.title)">
              {{ item.title }}
            </li>
          }
        </ul>
      }
    </div>
  `,
  styles: ``,
})
export class Pagination {
  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};
  writeValue(value: string) {
    if (value !== undefined && value !== null) {
      this.selectedPage.set(value);
    }
  }

  disabled = false;
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  pageItem: PageList[] = [
    { id: 1, title: '每頁 20 筆' },
    { id: 2, title: '每頁 50 筆' },
    { id: 3, title: '每頁 100 筆' },
  ];
  isOpen = signal(false);
  selectedPage: WritableSignal<string> = signal('每頁20筆');
  toggleDropdown() {
    this.isOpen.update((value) => !value);
  }
  selectOption(option: string) {
    if (!this.disabled) {
      this.selectedPage.set(option);
      this.isOpen.set(false);
      this.onChange(option);
      this.onTouched();
    }
  }
}
