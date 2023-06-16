import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BacketComponent } from './backet.component';
import { RouterModule } from '@angular/router';
import { BacketItemModule } from 'src/app/components/backet-item/backet-item.module';

@NgModule({
  declarations: [BacketComponent],
  imports: [CommonModule, RouterModule, BacketItemModule],
  exports: [BacketComponent],
})
export class BacketModule {}
