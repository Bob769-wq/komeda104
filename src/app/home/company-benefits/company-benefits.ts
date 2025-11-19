import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlockTitle } from '../../block-title/block-title';
import { TagSection } from '../../tag-section/tag-section';
interface BenefitsList {
  id: number;
  title: string;
  link: string;
}
interface DetailList {
  id: number;
  title: string;
  children?: DetailList[];
}
@Component({
  selector: 'app-company-benefits',
  imports: [BlockTitle, TagSection],
  template: `
    <section id="benefits">
      <div class="lg:px-10 lg:py-6 p-4 bg-white rounded">
        <app-block-title label="福利制度" />
        <div class="flex flex-col">
          <app-tag-section [items]="lawBenefitsItem" title="法定項目" />
          <app-tag-section [items]="otherBenefitsItem" title="其他福利" />
          <div class="flex flex-col gap-0.5">
            @for (item of detailItem; track item.id) {
              <h4 class="text-base">{{ item.title }}</h4>
              <ul class="flex flex-col gap-0.5">
                @for (child of item.children; track child.id) {
                  <li class="text-base">{{ child.title }}</li>
                }
              </ul>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class CompanyBenefits {
  lawBenefitsItem: BenefitsList[] = [
    { id: 1, title: '週休二日', link: '/law-benefits' },
    { id: 2, title: '家庭照顧假', link: '/law-benefits' },
    { id: 3, title: '勞保', link: '/law-benefits' },
    { id: 4, title: '健保', link: '/law-benefits' },
    { id: 5, title: '陪產假', link: '/law-benefits' },
    { id: 6, title: '產假', link: '/law-benefits' },
    { id: 7, title: '特別休假', link: '/law-benefits' },
    { id: 8, title: '育嬰留停', link: '/law-benefits' },
    { id: 9, title: '女性生理假', link: '/law-benefits' },
    { id: 10, title: '勞退提撥金', link: '/law-benefits' },
    { id: 11, title: '安胎假', link: '/law-benefits' },
    { id: 12, title: '產檢假', link: '/law-benefits' },
    { id: 13, title: '就業保險', link: '/law-benefits' },
    { id: 14, title: '防疫照顧假', link: '/law-benefits' },
    { id: 15, title: '員工體檢', link: '/law-benefits' },
    { id: 16, title: '職災保險', link: '/law-benefits' },
  ];

  otherBenefitsItem: BenefitsList[] = [
    { id: 1, title: '年終獎金', link: '/other-benefits' },
    { id: 2, title: '三節獎金/禮品', link: '/other-benefits' },
    { id: 3, title: '零食櫃', link: '/other-benefits' },
    { id: 4, title: '咖啡吧', link: '/other-benefits' },
    { id: 5, title: '生日假', link: '/other-benefits' },
    { id: 6, title: '結婚禮金', link: '/other-benefits' },
    { id: 7, title: '生育津貼', link: '/other-benefits' },
    { id: 8, title: '旅遊補助', link: '/other-benefits' },
    { id: 9, title: '住院慰問金', link: '/other-benefits' },
    { id: 10, title: '部門聚餐', link: '/other-benefits' },
    { id: 11, title: '慶生會', link: '/other-benefits' },
    { id: 12, title: '伙食津貼', link: '/other-benefits' },
    { id: 13, title: '員工團體保險', link: '/other-benefits' },
  ];

  detailItem: DetailList[] = [
    {
      id: 1,
      title: '★基本保障:',
      children: [
        { id: 1, title: '①勞保、健保、勞工退休金提撥6%' },
        { id: 2, title: '②休假依照勞動基準法天數計算' },
        { id: 3, title: '③年度員工健康檢查' },
      ],
    },
    {
      id: 2,
      title: '★正職福利制度:',
      children: [
        { id: 1, title: '●獎 金 類：員工生日禮金、年終獎金(視營運績效)、三節獎金/禮品' },
        { id: 2, title: '●餐 飲 類：現場各店員工供餐或員工用餐優惠；總部享有零食櫃、咖啡吧' },
        {
          id: 3,
          title: '●娛 樂 類：不定期聚餐、尾牙（摸彩/贈獎）、國內員工旅遊補助、(總部)員工 慶生活動',
        },
        { id: 4, title: '●休 假 類：特休、產假、育嬰假、陪產假、生理假' },
      ],
    },
    {
      id: 3,
      title: '★現場人員 正/兼職福利制度:',
      children: [
        { id: 1, title: '●提供員工制服' },
        { id: 2, title: '●享在職教育訓練' },
        { id: 3, title: '●員工介紹獎金' },
        { id: 4, title: '●兼職也享有特休(每年折現)' },
      ],
    },
    {
      id: 4,
      title: '★現場人員 正/兼職升遷調薪制度:',
      children: [
        { id: 1, title: '●順暢升遷管道 (計時轉正職/正職晉升級別/正職晉升儲備幹部/正職晉升主管職)' },
        { id: 2, title: '●完整調薪制度 (正職一年2次調薪考核、計時一年4次調薪機會)' },
      ],
    },
  ];
}
