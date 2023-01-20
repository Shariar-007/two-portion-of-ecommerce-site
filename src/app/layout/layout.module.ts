import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ProductsVisibleToUserComponent } from './components/products-visible-to-user/products-visible-to-user.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductsVisibleToUserComponent,
    ProductsDetailsComponent
  ],
    imports: [
        CommonModule,
        LayoutRoutingModule,
        ReactiveFormsModule
    ]
})
export class LayoutModule { }
