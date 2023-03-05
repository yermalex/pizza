import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPizzaCard } from '../product-list.interface';

@Component({
  selector: 'app-pizza-card',
  templateUrl: './pizza-card.component.html',
  styleUrls: ['./pizza-card.component.scss']
})
export class PizzaCardComponent {
  @Input() pizzaCard: IPizzaCard | undefined;
  @Output() onShowModal = new EventEmitter<void>();

  showModal(): void {
    this.onShowModal.emit();
  }
}
