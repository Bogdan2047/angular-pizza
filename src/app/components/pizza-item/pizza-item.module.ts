import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaItemComponent } from './pizza-item.component';
import { StoreModule } from '@ngrx/store';
import { pizzaReducer } from 'src/app/store/reducer';

@NgModule({
  declarations: [PizzaItemComponent],
  imports: [CommonModule, StoreModule.forFeature('pizza', pizzaReducer)],
  exports: [PizzaItemComponent],
})
export class PizzaItemModule {}
