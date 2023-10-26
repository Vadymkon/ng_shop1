import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProdPageComponent} from "./pages/prod-page/prod-page.component";
import {AboutPageComponent} from "./pages/about-page/about-page.component";

const routes: Routes = [
  {path: '', component: ProdPageComponent},
  {path: 'about', component: AboutPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
