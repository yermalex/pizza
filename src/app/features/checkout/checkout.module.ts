import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CheckoutComponent
  ],
  exports: [
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AlertModule,
    HttpClientModule
  ]
})
export class CheckoutModule { }
