import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../../model/product";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{

  product!: Product;

  constructor(
      private srv: ProductService,
      private activeRoute: ActivatedRoute,
      private route: Router
  ) {
  }

  ngOnInit(): void {
    this.srv.getProductById(this.activeRoute.snapshot.params['id'])
        .subscribe(r => this.product = r);

  }
}
