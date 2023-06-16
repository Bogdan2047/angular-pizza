import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetPizza } from 'src/app/store/actions';
import { TypePizza } from 'src/assets/types/pizza.interface';

@Component({
  selector: 'app-pizza-item',
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.scss'],
})
export class PizzaItemComponent {
  constructor(private store: Store) {}
  @Input() pizza: TypePizza;

  styleTypeBtnA: string = 'bg-blue-100 text-stone-400 w-[50%]';
  styleTypeBtnB: string = 'bg-white text-black w-[50%] rounded-sm';

  styleSizeBtnA: string = 'bg-blue-100 text-stone-400 w-[30%]';
  styleSizeBtnB: string = 'bg-white text-black w-[30%] rounded-sm';

  typeA: boolean = true;
  typeB: boolean = false;

  sizeA: boolean = true;
  sizeB: boolean = false;
  sizeC: boolean = false;

  type: string = 'thin';
  size: string = '26cm';
  quantity: number = 0;
  price: number = 0;

  changeTypeA(): void {
    this.typeA = true;
    this.typeB = false;
  }

  changeTypeB(): void {
    this.typeA = false;
    this.typeB = true;
  }

  changeSizeA(): void {
    this.sizeA = true;
    this.sizeB = false;
    this.sizeC = false;
  }

  changeSizeB(): void {
    this.sizeA = false;
    this.sizeB = true;
    this.sizeC = false;
  }

  changeSizeC(): void {
    this.sizeA = false;
    this.sizeB = false;
    this.sizeC = true;
  }

  getType(type): void {
    this.type = type;
  }

  getSize(size: string, price: number): void {
    if (size === '26cm') {
      this.price = price;
    }
    if (size === '30cm') {
      this.price = price + 15;
    }
    if (size === '40cm') {
      this.price = price + 20;
    }

    this.size = size;
  }

  getData(): void {
    let getOrderPizza = {
      type: this.type,
      size: this.size,
      price: this.price || this.pizza.price,
      id: this.pizza.id,
      title: this.pizza.title,
      img: this.pizza.img,
      count: this.pizza.count,
    };

    this.quantity++;
    this.store.dispatch(new GetPizza(getOrderPizza));
  }
}
