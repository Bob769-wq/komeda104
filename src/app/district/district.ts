import { Component, forwardRef, signal, WritableSignal } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
interface DistrictList {
  id: number;
  title: string;
}
@Component({
  selector: 'app-district',
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => District),
      multi: true,
    },
  ],
  template: `
    <div class="relative w-full lg:w-153">
      <div
        class="min-h-8 border hover:border-primary-orange bg-search-bg px-3 flex justify-between items-center rounded text-date-text outline outline-transparent hover:outline-primary-orange"
        (click)="toggleDropdown()"
      >
        <span class="font-bold">{{ selectedDistrict() }}</span>
        <span><i class="fa-solid fa-chevron-down"></i></span>
      </div>
      @if (isOpen()) {
        <ul
          class="absolute top-full z-30 left-0 bg-white border-2 border-primary-orange rounded max-h-40 w-full"
        >
          @for (item of districtOption; track item.id) {
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
export class District {
  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};
  writeValue(value: string) {
    if (value !== undefined && value !== null) {
      this.selectedDistrict.set(value);
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

  districtOption: DistrictList[] = [
    { id: 1, title: '地區' },
    { id: 2, title: '北部' },
    { id: 3, title: '中部' },
    { id: 4, title: '南部' },
  ];
  isOpen = signal(false);
  selectedDistrict: WritableSignal<string> = signal('地區');
  toggleDropdown() {
    this.isOpen.update((value) => !value);
  }
  selectOption(option: string) {
    if (!this.disabled) {
      this.selectedDistrict.set(option);
      this.isOpen.set(false);
      this.onChange(option);
      this.onTouched();
    }
  }
}
