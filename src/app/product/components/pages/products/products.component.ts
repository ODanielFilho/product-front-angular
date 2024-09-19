import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../model/product";
import {ProductCardComponent} from "../../ui/product-card/product-card.component";
import {ProductService} from "../../../service/product.service";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {Router} from "@angular/router";
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ProductCardComponent,
    AsyncPipe,
    ProductCardComponent,
    ProductCardComponent,
    ProductCardComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  products!: Observable<Product[]>
  constructor(
    private _productService: ProductService,
    private _router: Router
  ) {}
  ngOnInit(): void {
    this.products = this._productService.getProducts();
  }

  goDetail(id: string) {
    this._router.navigate([`/product/${id}`]);
  }
}
