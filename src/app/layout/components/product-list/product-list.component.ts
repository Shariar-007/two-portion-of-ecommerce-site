import {Component, OnInit, TemplateRef} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbDateStruct, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {LocalStorageService} from "../../../shared/services/local-storage.service";
import {Product} from "../../../shared/models/product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  addProductForm!: FormGroup;
  isUpdateble = false;
  products: Product[] = [];
  product : Product | undefined;

  constructor(private modalService: NgbModal, private fb: FormBuilder, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.addProduct();
    if(this.localStorageService.getDataFromLocalStorage('products') && this.localStorageService.getDataFromLocalStorage('products') != '') {
      // @ts-ignore
      this.products = JSON.parse(this.localStorageService.getDataFromLocalStorage('products'));
      // console.log(this.tasks);
      // this.toDoTasks = this.tasks.filter((item: { status: string; }) => item.status === 'toDo');
      // this.inProgressTasks = this.tasks.filter((item: { status: string; }) => item.status === 'inProgress');
      // this.doneTasks = this.tasks.filter((item: { status: string; }) => item.status === 'done');
    }
  }


  openModal(template: TemplateRef<any>) {
    this.isUpdateble = false;
    this.addProduct();
    this.modalService.open(template, {backdrop: 'static', centered: true, size: 'md'});
  }

  closeModal() {
    this.addProductForm.reset();
    // this.updateMonthlyRateForm.reset();
    this.modalService.dismissAll();
  }

  addProduct() {
    this.addProductForm = this.fb.group({
      id: [''],
      name: ["", [Validators.required, Validators.maxLength(100)]],
      productImage: ["", [Validators.required]],
      productPrize: [null, [Validators.required]],
      brandName: ["", Validators.required],
      description: [""],
    });
  }

  onFileChanged(event: any) {
    this.addProductForm.get('productImage')?.setValue(event.target.files[0].name)
    }

  submitForm() {
    // console.log(this.addProductForm.getRawValue());
    if(this.isUpdateble) {
      // @ts-ignore
      let products: any[] = JSON.parse(this.localStorageService.getDataFromLocalStorage('products'));
      // @ts-ignore
      const foundedIndex = products.findIndex(item => item.id === this.product.id);
      products[foundedIndex] = this.addProductForm.value;
      this.localStorageService.setDataToLocalStorage('products', JSON.stringify(products));
      this.closeModal();
      this.ngOnInit();
    } else {
      if(this.localStorageService.getDataFromLocalStorage('products') && this.localStorageService.getDataFromLocalStorage('products') != '') {
        this.addProductForm.get('id')?.setValue(Math.floor((Math.random() * 1000)));
        // @ts-ignore
        let products: Product[] = JSON.parse(this.localStorageService.getDataFromLocalStorage('products'));
        products.push(this.addProductForm.value);
        this.localStorageService.setDataToLocalStorage('products', JSON.stringify(products));
        this.closeModal();
        this.ngOnInit();
      } else {
        let products = [];
        this.addProductForm.get('id')?.setValue(Math.floor((Math.random() * 1000)));
        products.push(this.addProductForm.value)
        // products[0] = this.addProductForm.value;
        this.localStorageService.setDataToLocalStorage('products', JSON.stringify(products));
        this.closeModal();
        this.ngOnInit();
      }
    }
  }

  onEditProduct(template: TemplateRef<any>, item: Product) {
    this.isUpdateble = true;
    this.product = item;
    this.addProductForm.patchValue({
      id: item.id,
      name: item.name,
      productImage: item?.productImage,
      productPrize: item?.productPrize,
      brandName: item?.brandName,
      description: item.description
    });
    this.modalService.open(template, {backdrop: 'static', centered: true, size: 'md'});
  }

  onDeleteProduct(deleteProduct: TemplateRef<any>, item: Product) {
    this.product = item;
    this.modalService.open(deleteProduct, {backdrop: 'static', centered: true, size: 'md'});
  }

  onOkDelete() {
    // @ts-ignore
    let products: any[] = JSON.parse(this.localStorageService.getDataFromLocalStorage('products'));
    if(this.product) {
      // @ts-ignore
      products = products.filter((item: Product) => item.id !== this.product.id);
    }
    this.localStorageService.setDataToLocalStorage('products', JSON.stringify(products));
    this.ngOnInit();
    this.closeModal();
  }
}
