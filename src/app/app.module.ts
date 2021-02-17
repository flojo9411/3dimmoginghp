import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { Footer2Component } from './components/layouts/footer2/footer2.component';
import { Footer3Component } from './components/layouts/footer3/footer3.component';
import { Footer4Component } from './components/layouts/footer4/footer4.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ServicedetailComponent } from './components/pages/servicedetail/servicedetail.component';


@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    HeaderComponent,
    FooterComponent,
    Footer2Component,
    Footer3Component,
    Footer4Component,
    ContactComponent,
    ErrorComponent,
    FaqComponent,
    HomeComponent,
    PricingComponent,
    ServicesComponent,
    ServicedetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
