import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { TypePizza } from 'src/assets/types/pizza.interface';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  constructor(private http: HttpClient) {}

  getPizza() {
    return this.http.get<TypePizza[]>('../../assets/db.pizza.json').pipe(
      map((data: any) => {
        let pizzaList = data['foods'];
        return pizzaList.map(function (pizza: any) {
          return {
            title: pizza.title,
            id: pizza.id,
            img: pizza.img,
            price: pizza.price,
            type: pizza.type,
            size: pizza.size,
            additive: pizza.additive,
            count: pizza.count,
          };
        });
      })
    );
  }
}
