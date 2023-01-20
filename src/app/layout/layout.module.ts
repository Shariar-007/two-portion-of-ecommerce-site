import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AddProductComponent,
    ProductListComponent
  ],
    imports: [
        CommonModule,
        LayoutRoutingModule,
        ReactiveFormsModule
    ]
})
export class LayoutModule { }
