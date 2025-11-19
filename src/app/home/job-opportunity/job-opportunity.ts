import { Component, inject, signal, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlockTitle } from '../../block-title/block-title';
import { JobCard } from '../job-card/job-card';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Jobtypeselect } from '../../jobtypeselect/jobtypeselect';
import { Pagination } from '../../pagination/pagination';
import { DateOrder } from '../../date-order/date-order';
import { JobPosition } from '../../job-position/job-position';
import { District } from '../../district/district';
interface JobList {
  id: number;
  date: string;
  title: string;
  link: string;
  description: string;
  applicant: string;
  salary: string;
  condition: ConditionList[];
}
interface ConditionList {
  id: number;
  title: string;
}
@Component({
  selector: 'app-job-opportunity',
  imports: [
    RouterLink,
    BlockTitle,
    JobCard,
    ReactiveFormsModule,
    Jobtypeselect,
    Pagination,
    DateOrder,
    JobPosition,
    District,
  ],
  template: `
    <section id="job-opportunity">
      <div class="pt-4 pb-3 px-4 lg:px-10 border-b bg-white rounded">
        <app-block-title label="工作機會" />
        <form [formGroup]="form" (submit)="submit()">
          <div class="flex items-center flex-wrap gap-4">
            <div class="flex gap-4">
              <div class="relative text-lighter-text">
                <input
                  formControlName="searchControl"
                  type="text"
                  class="min-h-8 pl-3 w-full lg:w-153 outline-primary-orange border hover:outline hover:border-primary-orange rounded  bg-search-bg"
                  placeholder="搜尋職缺關鍵字"
                />
                <button type="submit">
                  <i
                    class="fa-solid fa-magnifying-glass absolute right-2 top-2 hover:text-primary-orange cursor-pointer"
                  ></i>
                </button>
              </div>
              <app-jobtypeselect formControlName="jobTypeControl" />
            </div>
            <div class="flex gap-4">
              <app-job-position formControlName="positionControl" />
              <app-district formControlName="districtControl" />
              <div class="flex items-center flex-shrink-0 lg:ml-8">
                <app-pagination formControlName="pageControl" class="hidden lg:block" />
                <div class="text-lighter-text hidden lg:block">｜</div>
                <app-date-order formControlName="dateControl" />
              </div>
            </div>
          </div>
        </form>
      </div>

      <app-job-card [jobs]="jobItem" />

      <div class="bg-white px-4">
        <div class="flex justify-between items-center">
          <div class="invisible min-w-24"></div>
          <div
            class="px-4 py-3 text-base text-lighter-text
          font-bold focus:outline-none outline-none"
          >
            <label>
              <select name="page-select" class="border-none min-w-28">
                <option value="1">第 1 / 2 頁</option>
                <option value="2">第 2 / 2 頁</option>
              </select>
            </label>
          </div>
          <a
            routerLink="/next"
            class="font-bold text-base
       text-lighter-text hover:text-primary-orange"
            >下一頁</a
          >
        </div>
      </div>
    </section>
  `,
  styles: `
    ::placeholder {
      color: #a9a9a9;
      font-size: 14px;
      font-weight: bold;
    }
  `,
})
export class JobOpportunity {
  fb = inject(NonNullableFormBuilder);
  form = this.fb.group({
    searchControl: this.fb.control(''),
    jobTypeControl: this.fb.control('工作性質'),
    positionControl: this.fb.control('職務類別'),
    districtControl: this.fb.control('地區'),
    pageControl: this.fb.control('每頁20筆'),
    dateControl: this.fb.control('廠商排序'),
  });
  //沒有validators因為本來沒有validators也會送出

  submit() {
    if (this.form.invalid) {
      alert('錯誤');
      return;
    }

    const { searchControl, ...restOfControls } = this.form.getRawValue();

    const data = {
      ...restOfControls,
      searchControl: searchControl.trim(),
    };

    console.log(data);
  }

  jobItem: JobList[] = [
    {
      id: 1,
      date: '11/11',
      title: '【客美多總部】出納專員',
      link: '/job01',
      salary: '月薪33,000~38,000元',
      description:
        '1. 管理總部員工代墊款及財務部零用金，辦理支出、報銷與核銷作業。2. 處理各項費用支付之發票、單據及帳務登錄。3. 辦理銀行相關作業（匯款、存提、票據、扣繳稅、二代健保等），並維護匯款資料。4. 處理營業稅與電子發票相關作業（登錄、上傳配號、申報及購買發票）。5. 整理與保管傳票及會計憑證。6. 完成主管交辦之其他財務相關事項。',
      condition: [
        { id: 1, title: '台北市中山區' },
        { id: 2, title: '1年以上' },
        { id: 3, title: '專科' },
        { id: 4, title: '月薪33,000~38,000元' },
      ],
      applicant: '6~10',
    },
    {
      id: 2,
      date: '11/11',
      title: '<11月盛大開幕>日本KOMEDA(民生圓環店)客美多咖啡廳_正職人員',
      link: '/job02',
      salary: '月薪36,000元',
      description:
        '我們是來自日本名古屋的客美多咖啡，為全服務性的日系咖啡廳，我們的理念是希望能提供給顧客們舒適的空間及幸福美好的食物，讓每位到店的大小朋友都能在客美多用心營造的溫馨氣氛裡渡過美好的一天。若您也喜歡日系咖啡廳的氛圍、想學習日式禮儀、或者是喜歡與人互動，只要您願意學習，都歡迎加入我們的行列！',
      condition: [
        { id: 1, title: '台北市松山區' },
        { id: 2, title: '經歷不拘' },
        { id: 3, title: '專科以上' },
        { id: 4, title: '月薪36,000元' },
      ],
      applicant: '0~5',
    },
    {
      id: 3,
      date: '11/11',
      title: '<11月盛大開幕>日本KOMEDA(民生圓環店)客美多咖啡廳_<全日>計時人員',
      link: '/job03',
      salary: '時薪200元',
      description:
        '我們是來自日本名古屋的客美多咖啡，為全服務性的日系咖啡廳，我們的理念是希望能提供給顧客們舒適的空間及幸福美好的食物，讓每位到店的大小朋友都能在客美多用心營造的溫馨氣氛裡渡過美好的一天。若您也喜歡日系咖啡廳的氛圍、想學習日式禮儀、或者是喜歡與人互動，只要您願意學習，都歡迎加入我們的行列！',
      condition: [
        { id: 1, title: '台北市松山區' },
        { id: 2, title: '經歷不拘' },
        { id: 3, title: '高中以上' },
        { id: 4, title: '時薪200元' },
      ],
      applicant: '0~5',
    },
    {
      id: 4,
      date: '11/10',
      title: '<11月盛大開幕>日本KOMEDA(民生圓環店)客美多咖啡廳_<假日班>計時人員',
      link: '/job04',
      salary: '時薪200元',
      description:
        '我們是來自日本名古屋的客美多咖啡，為全服務性的日系咖啡廳，我們的理念是希望能提供給顧客們舒適的空間及幸福美好的食物，讓每位到店的大小朋友都能在客美多用心營造的溫馨氣氛裡渡過美好的一天。若您也喜歡日系咖啡廳的氛圍、想學習日式禮儀、或者是喜歡與人互動，只要您願意學習，都歡迎加入我們的行列！',
      condition: [
        { id: 1, title: '台北市松山區' },
        { id: 2, title: '經歷不拘' },
        { id: 3, title: '高中以上' },
        { id: 4, title: '時薪200元' },
      ],
      applicant: '0~5',
    },
    {
      id: 5,
      date: '11/11',
      title: '<11月盛大開幕>日本KOMEDA(民生圓環店)客美多咖啡廳_<早班>計時人員',
      link: '/job05',
      salary: '時薪200元',
      description:
        '我們是來自日本名古屋的客美多咖啡，為全服務性的日系咖啡廳，我們的理念是希望能提供給顧客們舒適的空間及幸福美好的食物，讓每位到店的大小朋友都能在客美多用心營造的溫馨氣氛裡渡過美好的一天。若您也喜歡日系咖啡廳的氛圍、想學習日式禮儀、或者是喜歡與人互動，只要您願意學習，都歡迎加入我們的行列！',
      condition: [
        { id: 1, title: '台北市松山區' },
        { id: 2, title: '經歷不拘' },
        { id: 3, title: '高中以上' },
        { id: 4, title: '時薪200元' },
      ],
      applicant: '0~5',
    },
    {
      id: 6,
      date: '11/06',
      title: '日本KOMEDA(林口三井店)客美多咖啡廳_副店長',
      link: '/job06',
      salary: '月薪42,000元',
      description:
        '✯即日起，林口三井店新進正職人員另提供限時每月職務津貼2,000元，誠摯邀請您加入我們的行列!!我們是來自日本名古屋的客美多咖啡，為全服務性的日系咖啡廳，我們的理念是希望能提供給顧客們舒適的空間及幸福美好的食物，讓每位到店的大小朋友都能在客美多用心營造的溫馨氣氛裡渡過美好的一天。若您也喜歡日系咖啡廳的氛圍、想學習日式禮儀、或者是喜歡與人互動，只要您願意學習，都歡迎加入我們的行列！※正職人員：排班制，需輪班※兼職人員：排班4-8小時(依店鋪人力需求安排)歡迎學生實習/打工、應屆畢業生、白天/晚間/假日兼差、二度就業、有餐飲經驗者 等人才投遞履歷',
      condition: [
        { id: 1, title: '新北市林口區' },
        { id: 2, title: '3年以上' },
        { id: 3, title: '專科' },
        { id: 4, title: '月薪42,000元' },
      ],
      applicant: '0~5',
    },
    {
      id: 7,
      date: '11/12',
      title: '日本KOMEDA(林口三井店)客美多咖啡廳_領班',
      link: '/job07',
      salary: '月薪40,000元',
      description:
        '✯即日起，林口三井店新進正職人員另提供限時每月職務津貼2,000元，誠摯邀請您加入我們的行列!!我們是來自日本名古屋的客美多咖啡，為全服務性的日系咖啡廳，我們的理念是希望能提供給顧客們舒適的空間及幸福美好的食物，讓每位到店的大小朋友都能在客美多用心營造的溫馨氣氛裡渡過美好的一天。若您也喜歡日系咖啡廳的氛圍、想學習日式禮儀、或者是喜歡與人互動，只要您願意學習，都歡迎加入我們的行列！※正職人員：排班制，需輪班※兼職人員：排班4-8小時(依店鋪人力需求安排)歡迎學生實習/打工、應屆畢業生、白天/晚間/假日兼差、二度就業、有餐飲經驗者 等人才投遞履歷',
      condition: [
        { id: 1, title: '新北市林口區' },
        { id: 2, title: '3年以上' },
        { id: 3, title: '專科以上' },
        { id: 4, title: '月薪40,000元' },
      ],
      applicant: '0~5',
    },
    {
      id: 8,
      date: '11/10',
      title: '日本KOMEDA(林口三井店)客美多咖啡廳_儲備幹部',
      link: '/job08',
      salary: '月薪38,000元',
      description:
        '✯即日起，林口三井店新進正職人員另提供限時每月職務津貼2,000元，誠摯邀請您加入我們的行列!!我們是來自日本名古屋的客美多咖啡，為全服務性的日系咖啡廳，我們的理念是希望能提供給顧客們舒適的空間及幸福美好的食物，讓每位到店的大小朋友都能在客美多用心營造的溫馨氣氛裡渡過美好的一天。若您也喜歡日系咖啡廳的氛圍、想學習日式禮儀、或者是喜歡與人互動，只要您願意學習，都歡迎加入我們的行列！※正職人員：排班制，需輪班※兼職人員：排班4-8小時(依店鋪人力需求安排)歡迎學生實習/打工、應屆畢業生、白天/晚間/假日兼差、二度就業、有餐飲經驗者 等人才投遞履歷',
      condition: [
        { id: 1, title: '新北市林口區' },
        { id: 2, title: '2年以上' },
        { id: 3, title: '專科以上' },
        { id: 4, title: '月薪38,000元' },
      ],
      applicant: '0~5',
    },
    {
      id: 9,
      date: '11/11',
      title: '日本KOMEDA(林口三井店)客美多咖啡廳_正職人員',
      link: '/job09',
      salary: '月薪36,000元',
      description:
        '✯即日起，林口三井店新進正職人員另提供限時每月職務津貼2,000元，誠摯邀請您加入我們的行列!!我們是來自日本名古屋的客美多咖啡，為全服務性的日系咖啡廳，我們的理念是希望能提供給顧客們舒適的空間及幸福美好的食物，讓每位到店的大小朋友都能在客美多用心營造的溫馨氣氛裡渡過美好的一天。若您也喜歡日系咖啡廳的氛圍、想學習日式禮儀、或者是喜歡與人互動，只要您願意學習，都歡迎加入我們的行列！※正職人員：排班制，需輪班※兼職人員：排班4-8小時(依店鋪人力需求安排)歡迎學生實習/打工、應屆畢業生、白天/晚間/假日兼差、二度就業、有餐飲經驗者 等人才投遞履歷',
      condition: [
        { id: 1, title: '新北市林口區' },
        { id: 2, title: '經歷不拘' },
        { id: 3, title: '專科以上' },
        { id: 4, title: '月薪36,000元' },
      ],
      applicant: '0~5',
    },
    {
      id: 10,
      date: '11/11',
      title: '日本KOMEDA(林口三井店)客美多咖啡廳_<全日>計時人員',
      link: '/job10',
      salary: '時薪200元',
      description:
        '我們是來自日本名古屋的客美多咖啡，為全服務性的日系咖啡廳，我們的理念是希望能提供給顧客們舒適的空間及幸福美好的食物，讓每位到店的大小朋友都能在客美多用心營造的溫馨氣氛裡渡過美好的一天。若您也喜歡日系咖啡廳的氛圍、想學習日式禮儀、或者是喜歡與人互動，只要您願意學習，都歡迎加入我們的行列！',
      condition: [
        { id: 1, title: '新北市林口區' },
        { id: 2, title: '經歷不拘' },
        { id: 3, title: '高中以上' },
        { id: 4, title: '時薪200元' },
      ],
      applicant: '6~10',
    },
    {
      id: 11,
      date: '11/11',
      title: '日本KOMEDA(林口三井店)客美多咖啡廳_<假日班>計時人員',
      link: '/job11',
      salary: '時薪200元',
      description:
        '我們是來自日本名古屋的客美多咖啡，為全服務性的日系咖啡廳，我們的理念是希望能提供給顧客們舒適的空間及幸福美好的食物，讓每位到店的大小朋友都能在客美多用心營造的溫馨氣氛裡渡過美好的一天。若您也喜歡日系咖啡廳的氛圍、想學習日式禮儀、或者是喜歡與人互動，只要您願意學習，都歡迎加入我們的行列！',
      condition: [
        { id: 1, title: '新北市林口區' },
        { id: 2, title: '經歷不拘' },
        { id: 3, title: '高中以上' },
        { id: 4, title: '時薪200元' },
      ],
      applicant: '0~5',
    },
    {
      id: 12,
      date: '11/11',
      title: '日本KOMEDA(林口三井店)客美多咖啡廳_<早班>計時人員',
      link: '/job12',
      salary: '時薪200元',
      description:
        '我們是來自日本名古屋的客美多咖啡，為全服務性的日系咖啡廳，我們的理念是希望能提供給顧客們舒適的空間及幸福美好的食物，讓每位到店的大小朋友都能在客美多用心營造的溫馨氣氛裡渡過美好的一天。若您也喜歡日系咖啡廳的氛圍、想學習日式禮儀、或者是喜歡與人互動，只要您願意學習，都歡迎加入我們的行列！',
      condition: [
        { id: 1, title: '新北市林口區' },
        { id: 2, title: '經歷不拘' },
        { id: 3, title: '高中以上' },
        { id: 4, title: '時薪200元' },
      ],
      applicant: '0~5',
    },
    {
      id: 13,
      date: '11/06',
      title: '日本KOMEDA(小巨蛋店)客美多咖啡廳_副店長',
      link: '/job13',
      salary: '月薪42,000元',
      description:
        '【本公司一律採預約面試制，不接受親洽店家面試，應徵者請先使用人力銀行投遞履歷至本公司，履歷需詳細填寫自傳，人事會審核履歷是否符合職缺，謝謝您。】',
      condition: [
        { id: 1, title: '台北市松山區' },
        { id: 2, title: '3年以上' },
        { id: 3, title: '專科' },
        { id: 4, title: '月薪42,000元' },
      ],
      applicant: '0~5',
    },
    {
      id: 14,
      date: '11/12',
      title: '日本KOMEDA(小巨蛋店)客美多咖啡廳_領班',
      link: '/job14',
      salary: '月薪40,000元',
      description:
        '【本公司一律採預約面試制，不接受親洽店家面試，應徵者請先使用人力銀行投遞履歷至本公司，履歷需詳細填寫自傳，人事會審核履歷是否符合職缺，謝謝您。】',
      condition: [
        { id: 1, title: '台北市松山區' },
        { id: 2, title: '3年以上' },
        { id: 3, title: '專科以上' },
        { id: 4, title: '月薪40,000元' },
      ],
      applicant: '0~5',
    },
    {
      id: 15,
      date: '11/10',
      title: '日本KOMEDA(小巨蛋店)客美多咖啡廳_儲備幹部',
      link: '/job15',
      salary: '月薪38,000元',
      description:
        '【本公司一律採預約面試制，不接受親洽店家面試，應徵者請先使用人力銀行投遞履歷至本公司，履歷需詳細填寫自傳，人事會審核履歷是否符合職缺，謝謝您。】',
      condition: [
        { id: 1, title: '台北市松山區' },
        { id: 2, title: '2年以上' },
        { id: 3, title: '專科以上' },
        { id: 4, title: '月薪38,000元' },
      ],
      applicant: '0~5',
    },
    {
      id: 16,
      date: '11/11',
      title: '日本KOMEDA(小巨蛋店)客美多咖啡廳_正職人員',
      link: '/job16',
      salary: '月薪36,000元',
      description:
        '我們是來自日本名古屋的客美多咖啡，為全服務性的日系咖啡廳，我們的理念是希望能提供給顧客們舒適的空間及幸福美好的食物，讓每位到店的大小朋友都能在客美多用心營造的溫馨氣氛裡渡過美好的一天。若您也喜歡日系咖啡廳的氛圍、想學習日式禮儀、或者是喜歡與人互動，只要您願意學習，都歡迎加入我們的行列！',
      condition: [
        { id: 1, title: '台北市松山區' },
        { id: 2, title: '1年以上' },
        { id: 3, title: '專科' },
        { id: 4, title: '月薪36,000元' },
      ],
      applicant: '0~5',
    },
    {
      id: 17,
      date: '11/11',
      title: '日本KOMEDA(小巨蛋店)客美多咖啡廳_<全日>計時人員',
      link: '/job17',
      salary: '時薪200元',
      description:
        '我們是來自日本名古屋的客美多咖啡，為全服務性的日系咖啡廳，我們的理念是希望能提供給顧客們舒適的空間及幸福美好的食物，讓每位到店的大小朋友都能在客美多用心營造的溫馨氣氛裡渡過美好的一天。若您也喜歡日系咖啡廳的氛圍、想學習日式禮儀、或者是喜歡與人互動，只要您願意學習，都歡迎加入我們的行列！',
      condition: [
        { id: 1, title: '台北市松山區' },
        { id: 2, title: '經歷不拘' },
        { id: 3, title: '高中以上' },
        { id: 4, title: '時薪200元' },
      ],
      applicant: '0~5',
    },
    {
      id: 18,
      date: '11/12',
      title: '日本KOMEDA(小巨蛋店)客美多咖啡廳_<假日班>計時人員',
      link: '/job18',
      salary: '時薪200元',
      description:
        '我們是來自日本名古屋的客美多咖啡，為全服務性的日系咖啡廳，我們的理念是希望能提供給顧客們舒適的空間及幸福美好的食物，讓每位到店的大小朋友都能在客美多用心營造的溫馨氣氛裡渡過美好的一天。若您也喜歡日系咖啡廳的氛圍、想學習日式禮儀、或者是喜歡與人互動，只要您願意學習，都歡迎加入我們的行列！',
      condition: [
        { id: 1, title: '台北市松山區' },
        { id: 2, title: '經歷不拘' },
        { id: 3, title: '高中以上' },
        { id: 4, title: '時薪200元' },
      ],
      applicant: '0~5',
    },
    {
      id: 19,
      date: '11/12',
      title: '日本KOMEDA(小巨蛋店)客美多咖啡廳_<早班>計時人員',
      link: '/job19',
      salary: '時薪200元',
      description:
        '我們是來自日本名古屋的客美多咖啡，為全服務性的日系咖啡廳，我們的理念是希望能提供給顧客們舒適的空間及幸福美好的食物，讓每位到店的大小朋友都能在客美多用心營造的溫馨氣氛裡渡過美好的一天。若您也喜歡日系咖啡廳的氛圍、想學習日式禮儀、或者是喜歡與人互動，只要您願意學習，都歡迎加入我們的行列！',
      condition: [
        { id: 1, title: '台北市松山區' },
        { id: 2, title: '經歷不拘' },
        { id: 3, title: '高中以上' },
        { id: 4, title: '時薪200元' },
      ],
      applicant: '0~5',
    },
    {
      id: 20,
      date: '11/11',
      title: '日本KOMEDA(小巨蛋店)客美多咖啡廳_<晚班>計時人員',
      link: '/job20',
      salary: '時薪200元',
      description:
        '我們是來自日本名古屋的客美多咖啡，為全服務性的日系咖啡廳，我們的理念是希望能提供給顧客們舒適的空間及幸福美好的食物，讓每位到店的大小朋友都能在客美多用心營造的溫馨氣氛裡渡過美好的一天。若您也喜歡日系咖啡廳的氛圍、想學習日式禮儀、或者是喜歡與人互動，只要您願意學習，都歡迎加入我們的行列！',
      condition: [
        { id: 1, title: '台北市松山區' },
        { id: 2, title: '經歷不拘' },
        { id: 3, title: '高中以上' },
        { id: 4, title: '時薪200元' },
      ],
      applicant: '0~5',
    },
  ];
}
