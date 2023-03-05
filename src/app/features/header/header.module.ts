import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterLink } from '@angular/router';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    ButtonsModule,
    FormsModule
  ]
})
export class HeaderModule { }
