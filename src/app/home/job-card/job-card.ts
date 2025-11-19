import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
interface JobList {
  id: number;
  date: string;
  title: string;
  link: string;
  salary: string;
  description: string;
  applicant: string;
  condition: ConditionList[];
}
interface ConditionList {
  id: number;
  title: string;
}
@Component({
  selector: 'app-job-card',
  imports: [RouterLink],
  template: `
    @for (item of jobs(); track item.id) {
      <div class="flex justify-between lg:justify-start gap-5 border-b lg:px-10 px-4 py-4 bg-white">
        <div class="text-date-text hidden lg:block">{{ item.date }}</div>
        <div class="flex flex-col gap-1 lg:gap-2">
          <h2 class="font-bold text-base lg:text-lg line-clamp-1">
            <a
              [routerLink]="item.link"
              class="text-normal-blue hover:text-normal-blue-hover font-bold"
              >{{ item.title }}</a
            >
          </h2>
          <div class="flex items-center gap-0.5">
            @for (
              condition of item.condition;
              track condition.id;
              let last = $last;
              let i = $index
            ) {
              <h4
                class="lg:font-bold  text-side-nav-text lg:text-current"
                [class.hidden]="i > 2"
                [class.lg:block]="i > 2"
              >
                {{ condition.title }}
              </h4>
              @if (!last) {
                <span [class.hidden]="i === 2" [class.lg:block]="i === 2">｜</span>
              }
            }
          </div>
          <p class="font-bold text-primary-orange">{{ item.salary }}</p>
          <div class="max-w-[53rem] max-h-10 line-clamp-2 text-side-nav-text hidden lg:block">
            {{ item.description }}
          </div>
        </div>
        <div class="lg:flex flex-col gap-3 hidden">
          <button
            class="border flex justify-center items-center gap-3 w-132 leading-8
            border-side-nav-text text-side-nav-text rounded hover:border-primary-orange
             hover:text-primary-orange font-bold hover:shadow-hover-button-shadow"
          >
            <span>
              <i class="fa-solid fa-star"></i>
            </span>
            <span>儲存</span>
          </button>
          <a
            routerLink="/apply"
            class="border flex justify-center items-center gap-3 w-132 leading-8
            border-side-nav-text text-side-nav-text rounded hover:border-primary-orange
             hover:text-primary-orange font-bold hover:shadow-hover-button-shadow"
          >
            <span>
              <i class="fa-solid fa-envelope"></i>
            </span>
            <span>應徵</span>
          </a>
          <a
            routerLink="/applicant"
            class="flex items-center gap-1 justify-center text-side-nav-text hover:text-primary-orange"
          >
            <span>
              <i class="fa-solid fa-table-list"></i>
            </span>
            <div>
              <span>{{ item.applicant }}</span>
              <span>人應徵</span>
            </div>
          </a>
        </div>
        <div class="lg:hidden flex flex-col justify-between">
          <div class="text-side-nav-text">{{ item.date }}</div>
          <button class="text-side-nav-text hover:text-primary-orange">
            <span><i class="fa-solid fa-star "></i> </span>
          </button>
        </div>
      </div>
    }
  `,
  styles: ``,
})
export class JobCard {
  jobs = input.required<JobList[]>();
}
