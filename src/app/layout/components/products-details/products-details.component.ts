import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from "rxjs";
import {Product} from "../../../shared/models/product.model";
import {LocalStorageService} from "../../../shared/services/local-storage.service";

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {
  private routeSub: Subscription | undefined;
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      if (this.localStorageService.getDataFromLocalStorage('products') && this.localStorageService.getDataFromLocalStorage('products') != '') {
        // @ts-ignore
        const products: any[] = JSON.parse(this.localStorageService.getDataFromLocalStorage('products'));
        this.product = products.filter(item => item.id == params['id'])[0];
      }
    });
  }

  ngOnDestroy() {
    // @ts-ignore
    this.routeSub.unsubscribe();
  }
}
