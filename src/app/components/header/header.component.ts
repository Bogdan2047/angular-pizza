import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs';
import { selectPizzaOrder } from 'src/app/store/selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private store: Store) {
    this.store
      .pipe(
        select(selectPizzaOrder),
        map((item) => {
          this.count = item.reduce((sum, item) => {
            return item.count + sum;
          }, 0);
          this.price = item.reduce((sum, item) => {
            return item.price + sum;
          }, 0);

          return item;
        })
      )
      .subscribe((vl) => console.log(vl));
  }

  count: number;
  price: number;
}
