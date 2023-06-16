import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-pizza',
  templateUrl: './filter-pizza.component.html',
  styleUrls: ['./filter-pizza.component.scss'],
})
export class FilterPizzaComponent {
  @Output() filterPizza = new EventEmitter<{ additive: string }>();

  btnAll: boolean = true;
  btnPepper: boolean = false;
  btnChiken: boolean = false;
  btnMushroom: boolean = false;
  btnCheese: boolean = false;

  btnGrey = 'bg-stone-100 w-[80px] h-[30px] rounded-2xl';
  btnBlack = 'bg-black text-white w-[80px] h-[30px] rounded-2xl';

  changeBtnAll() {
    this.btnAll = true;
    this.btnPepper = false;
    this.btnChiken = false;
    this.btnMushroom = false;
    this.btnCheese = false;
  }

  changeBtnPepper() {
    this.btnAll = false;
    this.btnPepper = true;
    this.btnChiken = false;
    this.btnMushroom = false;
    this.btnCheese = false;
  }

  changeBtnChiken() {
    this.btnAll = false;
    this.btnPepper = false;
    this.btnChiken = true;
    this.btnMushroom = false;
    this.btnCheese = false;
  }

  changeBtnMushroom() {
    this.btnAll = false;
    this.btnPepper = false;
    this.btnChiken = false;
    this.btnMushroom = true;
    this.btnCheese = false;
  }

  changeBtnCheese() {
    this.btnAll = false;
    this.btnPepper = false;
    this.btnChiken = false;
    this.btnMushroom = false;
    this.btnCheese = true;
  }

  handleFilter(additive: string) {
    this.filterPizza.emit({ additive });
  }
}
