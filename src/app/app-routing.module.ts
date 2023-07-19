import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecontrolComponent } from './homecontrol/homecontrol.component';

const routes: Routes = [
  { path: 'home', component: HomecontrolComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
