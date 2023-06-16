import { Component, OnInit } from '@angular/core';
import { PizzaService } from 'src/app/services/pizza.service';
import { TypePizza } from 'src/assets/types/pizza.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private pizzaService: PizzaService) {}
  pizzas: TypePizza[] = [];
  filteredPizza: TypePizza[] = [];

  ngOnInit() {
    this.pizzaService
      .getPizza()
      .subscribe((data) => ((this.pizzas = data), (this.filteredPizza = data)));
  }

  onFilter(eventData: { additive: string }) {
    this.filteredPizza = this.pizzas.filter(
      (pizza) => pizza.additive === eventData.additive
    );
  }

  onSearch(eventData: { text: string }) {
    this.filteredPizza = this.pizzas.filter((pizza) =>
      pizza.title.toLowerCase().includes(eventData.text.toLowerCase())
    );
  }
}
