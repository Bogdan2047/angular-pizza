import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPizzaComponent } from './filter-pizza.component';

@NgModule({
  declarations: [FilterPizzaComponent],
  imports: [CommonModule],
  exports: [FilterPizzaComponent],
})
export class FilterPizzaModule {}
