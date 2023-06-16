import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TypePizza } from 'src/assets/types/pizza.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input() pizza: TypePizza[];
  @Output() searchPizza = new EventEmitter<{ text: string }>();

  text = '';

  handleSearch(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.searchPizza.emit({ text: this.text });
    }
  }
}
