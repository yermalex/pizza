import { Component, TemplateRef } from '@angular/core';
import { IPizzaCard } from './product-list.interface';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  pizzaCardList: IPizzaCard[] = [
    {
      title: 'Мясная Делюкс',
      description: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы',
      src: 'assets/pizza1.png'
    },
    {
      title: 'Морская Премиум',
      description: 'Перец, сыр, креветки, кальмары, мидии, лосось',
      src: 'assets/pizza2.png'
    },
    {
      title: 'Бекон и Сосиски',
      description: 'Бекон, сыр, сосиски, ананас, томатная паста',
      src: 'assets/pizza3.png'
    },
    {
      title: 'Куриная Делюкс',
      description: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
      src: 'assets/pizza4.png'
    },
    {
      title: 'Барбекю Премиум',
      description: 'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили',
      src: 'assets/pizza5.png'
    },
    {
      title: 'Пепперони Дабл',
      description: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная',
      src: 'assets/pizza6.png'
    },
    {
      title: 'Куриное трио',
      description: 'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы',
      src: 'assets/pizza7.png'
    },
    {
      title: 'Сырная',
      description: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
      src: 'assets/pizza8.png'
    },
  ];

  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.modalRef.setClass('img-modal');
  }
}
