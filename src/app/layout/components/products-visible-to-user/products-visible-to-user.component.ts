import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from "../../../shared/services/local-storage.service";
import {Product} from "../../../shared/models/product.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products-visible-to-user',
  templateUrl: './products-visible-to-user.component.html',
  styleUrls: ['./products-visible-to-user.component.scss']
})
export class ProductsVisibleToUserComponent implements OnInit {
  products: Product[] = [];

  constructor(private localStorageService: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
    if(this.localStorageService.getDataFromLocalStorage('products') && this.localStorageService.getDataFromLocalStorage('products') != '') {
      // @ts-ignore
      this.products = JSON.parse(this.localStorageService.getDataFromLocalStorage('products'));
    }
  }
}
