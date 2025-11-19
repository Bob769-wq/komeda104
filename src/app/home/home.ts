import { Component, HostListener, signal } from '@angular/core';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Crumb } from './crumb/crumb';
import { HeroSection } from './hero-section/hero-section';
import { CompanyIntro } from './company-intro/company-intro';
import { CompanyPic } from './company-pic/company-pic';
import { CompanyBenefits } from './company-benefits/company-benefits';
import { JobOpportunity } from './job-opportunity/job-opportunity';
import { Sidenav } from './sidenav/sidenav';
import { MainProduct } from './main-product/main-product';
import { UpperHeroSection } from '../upper-hero-section/upper-hero-section';
import { News } from '../news/news';
import { Contact } from '../contact/contact';
import { Rating } from '../rating/rating';
import { ShareLinks } from '../share-links/share-links';
import { Interested } from '../interested/interested';
import { RightSideChatbot } from '../right-side-chatbot/right-side-chatbot';
import { MobileRightSideChatbot } from '../mobile-right-side-chatbot/mobile-right-side-chatbot';

@Component({
  selector: 'app-home',
  imports: [
    Header,
    Footer,
    Crumb,
    HeroSection,
    CompanyIntro,
    CompanyPic,
    CompanyBenefits,
    JobOpportunity,
    Sidenav,
    MainProduct,
    UpperHeroSection,
    News,
    Contact,
    Rating,
    ShareLinks,
    Interested,
    RightSideChatbot,
    MobileRightSideChatbot,
  ],
  template: `
    <app-header />
    <app-crumb />
    <app-upper-hero-section />
    <app-hero-section />
    <div class="lg:max-w-984 media-screen-1366:max-w-1224 mx-auto lg:px-3 lg:flex gap-6 pb-7">
      <div class="lg:max-w-980 flex-grow min-w-0 flex flex-col gap-4">
        <app-company-intro />
        <app-main-product />
        <app-company-pic />
        <app-company-benefits />
        <app-news class="lg:hidden" />
        <app-contact class="lg:hidden" />
        <app-rating class="lg:hidden" />
        <app-share-links class="lg:hidden" />
        <app-interested class="lg:hidden" />
        <app-job-opportunity />
      </div>
      <app-sidenav class="w-56 flex-shrink-0 hidden lg:block" />
    </div>
    <app-footer />

    <app-right-side-chatbot class="hidden lg:block" />
    <app-mobile-right-side-chatbot class="lg:hidden" />
  `,
  styles: ``,
})
export class Home {}
