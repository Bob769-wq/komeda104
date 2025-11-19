import { Component, forwardRef, signal, WritableSignal } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
interface DateList {
  id: number;
  title: string;
}
@Component({
  selector: 'app-date-order',
  imports: [FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateOrder),
      multi: true,
    },
  ],
  template: `
    <div class="relative">
      <div
        class="flex items-center gap-1 text-lighter-text hover:text-primary-orange cursor-pointer"
        (click)="toggleDropdown()"
      >
        <span>{{ selectedDate() }}</span>
        <span><i class="fa-solid fa-chevron-down"></i></span>
      </div>
      @if (isOpen()) {
        <ul
          class="absolute top-full z-30 left-0 bg-white border-2 border-primary-orange min-w-24 rounded"
        >
          @for (item of dateItem; track item.id) {
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
export class DateOrder {
  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};
  writeValue(value: string) {
    if (value !== undefined && value !== null) {
      this.selectedDate.set(value);
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

  dateItem: DateList[] = [
    { id: 1, title: '廠商排序' },
    { id: 2, title: '日期新⭢舊' },
    { id: 3, title: '日期舊⭢新' },
  ];

  isOpen = signal(false);
  selectedDate: WritableSignal<string> = signal('廠商排序');
  toggleDropdown() {
    this.isOpen.update((value) => !value);
  }
  selectOption(option: string) {
    if (!this.disabled) {
      this.selectedDate.set(option);
      this.isOpen.set(false);
      this.onChange(option);
      this.onTouched();
    }
  }
}
