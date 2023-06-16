import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { PizzaItemModule } from 'src/app/components/pizza-item/pizza-item.module';
import { FilterPizzaModule } from 'src/app/components/filter-pizza/filter-pizza.module';
import { SearchModule } from 'src/app/components/search/search.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    HeaderModule,
    PizzaItemModule,
    FilterPizzaModule,
    SearchModule,
  ],
  exports: [MainComponent],
})
export class MainModule {}
