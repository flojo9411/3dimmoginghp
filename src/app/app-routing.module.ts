import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ServicedetailComponent } from './components/pages/servicedetail/servicedetail.component';




const routes: Routes = [
  {
    path:'',component:HomeComponent 
  },
  {
    path:'faqs',component:FaqComponent
  },
  {
    path:'contact-us',component:ContactComponent
  },
  {
    path:'pricing',component:PricingComponent
  },
  {
    path:'services',component:ServicesComponent
  },
  {
    path:'service-detail',component:ServicedetailComponent
  },
  {
    path:'**',component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
