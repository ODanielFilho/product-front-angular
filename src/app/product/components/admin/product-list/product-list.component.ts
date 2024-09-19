import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../../../model/product";
import {ProductService} from "../../../service/product.service";
import {Router} from "@angular/router";
import {AsyncPipe} from "@angular/common";
import {ProductCardComponent} from "../../ui/product-card/product-card.component";
import {DeleteButtonComponent} from "../../ui/delete-button/delete-button.component";
import {AddButtonComponent} from "../../ui/add-button/add-button.component";
import {EditButtonComponent} from "../../ui/edit-button/edit-button.component";

@Component({
  selector: 'app-product-card-list',
  standalone: true,
  imports: [
    AsyncPipe,
    ProductCardComponent,
    DeleteButtonComponent,
    AddButtonComponent,
    EditButtonComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  products!: Observable<Product[]>
  constructor(
    private _productService: ProductService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.products = this._productService.getProducts();
  }

  goEdit(id: string) {
    this._router.navigate([`/update-products/${id}`]);
  }

  goCreate() {
    this._router.navigate([`/register-products`]);
  }
  goDelete() {
    this._router.navigate([`/delete-products`])
  }

  delete(id: string) {
    this._productService.delete(id)
    this.goDelete();
  }
}
