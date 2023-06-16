import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { BacketComponent } from './pages/backet/backet.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'backet',
    component: BacketComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
