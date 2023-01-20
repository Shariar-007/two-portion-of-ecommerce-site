import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from "./components/product-list/product-list.component";
import {ProductsVisibleToUserComponent} from "./components/products-visible-to-user/products-visible-to-user.component";
import {ProductsDetailsComponent} from "./components/products-details/products-details.component";

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'list',
  },
  {
    path: 'list', component: ProductListComponent,
  },
  {
    path: 'all', component: ProductsVisibleToUserComponent,
  },
  {
    path: ':id', component: ProductsDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
