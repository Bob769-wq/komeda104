import { Component } from '@angular/core';
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
  ],
  template: `
    <app-header />
    <div class="max-w-1224 mx-auto px-3">
      <app-crumb />
      <img src="/hero-section.jpg" class="w-full aspect-[11/3] object-cover" alt="hero-section" />
    </div>

    <div class="max-w-1224 mx-auto px-3 mb-4 sticky top-header-height">
      <app-hero-section />
    </div>

    <div class="max-w-1224 mx-auto px-3 flex gap-6">
      <div class="max-w-980 flex-grow min-w-0 flex flex-col gap-4">
        <app-company-intro />
        <app-main-product />
        <app-company-pic />
        <app-company-benefits />
        <app-job-opportunity />
      </div>
      <app-sidenav class="w-56 flex-shrink-0" />
    </div>

    <app-footer />
  `,
  styles: ``,
})
export class Home {}
