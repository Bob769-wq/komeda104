import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InterestedCompanyContent } from '../interested-company-content/interested-company-content';
interface InterestedList {
  id: number;
  title: string;
  link: string;
  district: string;
}
@Component({
  selector: 'app-interested',
  imports: [RouterLink, InterestedCompanyContent],
  template: ` <app-interested-company-content [interestedItem]="interestedItem" /> `,
  styles: ``,
})
export class Interested {
  interestedItem: InterestedList[] = [
    { id: 1, title: '客美多咖啡中山店_盛枝有限公司', district: '台北市中山區', link: '/store1' },
    {
      id: 2,
      title: '好食餐飲集團_好食國際投資股份有限公司',
      district: '台北市士林區',
      link: '/store2',
    },
    {
      id: 3,
      title: '客美多咖啡 Komeda’s Coffee(士林店)_果磊有限公司',
      district: '台北市中正區',
      link: '/store3',
    },
    {
      id: 4,
      title: "Komeda's Coffee 客美多咖啡_專成國際股份有限公司",
      district: '台北市中山區',
      link: '/store4',
    },
    { id: 5, title: '路易莎職人咖啡股份有限公司', district: '台南市北區', link: '/store5' },
    {
      id: 6,
      title: "Komeda's Coffee 客美多咖啡林口長庚店_宜達恆飲食有限公司",
      district: '台北市信義區',
      link: '/store6',
    },
  ];
}
