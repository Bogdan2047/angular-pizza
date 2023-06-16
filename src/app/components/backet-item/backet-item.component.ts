import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  DeleteOrder,
  MinusCountPizza,
  PlusCountPizza,
} from 'src/app/store/actions';

@Component({
  selector: 'app-backet-item',
  templateUrl: './backet-item.component.html',
  styleUrls: ['./backet-item.component.scss'],
})
export class BacketItemComponent {
  constructor(private store: Store) {}
  @Input() pizza;

  handlePlus() {
    let plusData = {
      count: this.pizza.count,
      id: this.pizza.id,
      price: this.pizza.price,
    };
    this.store.dispatch(new PlusCountPizza(plusData));
  }

  handleMinus() {
    let minusData = {
      count: this.pizza.count,
      id: this.pizza.id,
      price: this.pizza.price,
    };
    this.store.dispatch(new MinusCountPizza(minusData));
  }

  getId() {
    let idPizza = {
      id: this.pizza.id,
    };
    this.store.dispatch(new DeleteOrder(idPizza));
  }
}
