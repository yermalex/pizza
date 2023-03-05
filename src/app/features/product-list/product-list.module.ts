import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { PizzaCardComponent } from './pizza-card/pizza-card.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    ProductListComponent,
    PizzaCardComponent
  ],
  exports: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    ModalModule.forRoot()
  ]
})
export class ProductListModule { }
