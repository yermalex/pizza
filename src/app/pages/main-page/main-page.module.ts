import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutModule } from '../../features/checkout/checkout.module';
import { HeaderModule } from '../../features/header/header.module';
import { OfferModule } from '../../features/offer/offer.module';
import { ProductListModule } from '../../features/product-list/product-list.module';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
];

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CheckoutModule,
    HeaderModule,
    OfferModule,
    ProductListModule
  ],
  exports: [RouterModule]
})
export class MainPageModule { }
