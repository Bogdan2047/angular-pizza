import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs';
import { DeleteBacket } from 'src/app/store/actions';
import { selectPizzaOrder } from 'src/app/store/selector';

@Component({
  selector: 'app-backet',
  templateUrl: './backet.component.html',
  styleUrls: ['./backet.component.scss'],
})
export class BacketComponent {
  constructor(private store: Store) {
    this.store
      .pipe(
        select(selectPizzaOrder),
        map((item) => {
          this.pizzaData = item;

          this.countAll = item.reduce((sum, item) => {
            return item.count + sum;
          }, 0);
          this.priceAll = item.reduce((sum, item) => {
            return item.price + sum;
          }, 0);

          return item;
        })
      )
      .subscribe((vl) => console.log(vl));
  }

  pizzaData: any = [];
  countAll: number = 0;
  priceAll: number = 0;

  handleDelete() {
    this.store.dispatch(new DeleteBacket());
  }
}
