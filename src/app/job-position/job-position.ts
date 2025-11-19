import { Component, forwardRef, signal, WritableSignal } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
interface PositionList {
  id: number;
  title: string;
}
@Component({
  selector: 'app-job-position',
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => JobPosition),
      multi: true,
    },
  ],
  template: `
    <div class="relative w-full lg:w-153">
      <div
        class="min-h-8 border hover:border-primary-orange bg-search-bg px-3 flex justify-between items-center rounded text-date-text outline outline-transparent hover:outline-primary-orange"
        (click)="toggleDropdown()"
      >
        <span class="font-bold">{{ selectedPosition() }}</span>
        <span><i class="fa-solid fa-chevron-down"></i></span>
      </div>
      @if (isOpen()) {
        <ul
          class="absolute z-30 top-full left-0 bg-white border-2 border-primary-orange rounded max-h-40 w-full"
        >
          @for (item of positionOption; track item.id) {
            <li class="p-2 cursor-pointer text-base" (click)="selectOption(item.title)">
              {{ item.title }}
            </li>
          }
        </ul>
      }
    </div>
  `,
  styles: ``,
})
export class JobPosition {
  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};
  writeValue(value: string) {
    if (value !== undefined && value !== null) {
      this.selectedPosition.set(value);
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

  positionOption: PositionList[] = [
    { id: 1, title: '職務類別' },
    { id: 2, title: '員工' },
    { id: 3, title: '主管' },
    { id: 4, title: '股東' },
  ];
  isOpen = signal(false);
  selectedPosition: WritableSignal<string> = signal('職務類別');
  toggleDropdown() {
    this.isOpen.update((value) => !value);
  }
  selectOption(option: string) {
    if (!this.disabled) {
      this.selectedPosition.set(option);
      this.isOpen.set(false);
      this.onChange(option);
      this.onTouched();
    }
  }
}
