import { Component, signal, WritableSignal, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
interface ConditionList {
  id: number;
  title: string;
}
@Component({
  selector: 'app-jobtypeselect',
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Jobtypeselect),
      multi: true,
    },
  ],
  template: `
    <div class="relative lg:w-153 w-full">
      <div
        class="min-h-8 border hover:border-primary-orange bg-search-bg px-3 flex justify-between items-center rounded text-date-text outline outline-transparent hover:outline-primary-orange"
        (click)="toggleDropdown()"
      >
        <span class="font-bold">{{ selectedJob() }}</span>
        <span><i class="fa-solid fa-chevron-down"></i></span>
      </div>
      @if (isOpen()) {
        <ul
          class="absolute z-30 top-full left-0 bg-white border-2 border-primary-orange rounded max-h-40 w-full"
        >
          @for (item of jobOptions; track item.id) {
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
export class Jobtypeselect {
  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};
  writeValue(value: string) {
    if (value !== undefined && value !== null) {
      this.selectedJob.set(value);
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

  jobOptions: ConditionList[] = [
    { id: 1, title: '全職' },
    { id: 2, title: '兼職' },
  ];
  isOpen = signal(false);
  selectedJob: WritableSignal<string> = signal('工作性質');
  toggleDropdown() {
    this.isOpen.update((value) => !value);
  }
  selectOption(option: string) {
    if (!this.disabled) {
      this.selectedJob.set(option);
      this.isOpen.set(false);
      this.onChange(option);
      this.onTouched();
    }
  }
}
