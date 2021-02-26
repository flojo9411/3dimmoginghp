import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ServicedetailComponent } from './components/pages/servicedetail/servicedetail.component';
import { ImmobilienComponent } from './components/pages/Immoblien/immobilien.component';
import { VermietungComponent } from './components/pages/Vermietung/vermietung.component';
import { ArchitekturComponent } from './components/pages/Architektur/architektur.component';
import { GastronomieComponent } from './components/pages/Gastronomie/gastronomie.component';




const routes: Routes = [
  {
    path:'',component:HomeComponent 
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
    path:'immobilien',component:ImmobilienComponent
  },
  {
    path:'vermietung',component:VermietungComponent
  },
  {
    path:'architektur',component:ArchitekturComponent
  },
  {
    path:'gastronomie',component:GastronomieComponent
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
