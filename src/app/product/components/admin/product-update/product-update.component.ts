import {Component, OnInit} from '@angular/core';
import {Product} from "../../../model/product";
import {ProductService} from "../../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-product-card-update',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.scss'
})
export class ProductUpdateComponent implements OnInit {
  product!: Product;
  productForm!: FormGroup;
  constructor(
    private srv: ProductService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private _router: Router
) {
  }
  ngOnInit(): void {
    this.productForm = this.fb.group({
      id: [null, Validators.required],
      name: ['', Validators.required],
      description: [''],
      price: [0, [Validators.required, Validators.min(0)]],
      category: [''],
      brand: [''],
      quantityInStock: [0, [Validators.required, Validators.min(0)]],
      sku: ['', Validators.required],
      weight: [0, [Validators.required, Validators.min(0)]],
      dimensions: [''],
      color: [''],
      imageUrl: [''],
      status: ['Disponível', Validators.required]
    });
    this.route.params.subscribe(params => {
      this.srv.getProductById(params['id']).subscribe(product => {
        this.product = product;
        this.productForm.patchValue({
          id: this.product.id,
          name: this.product.name,
          description: this.product.description,
          price: this.product.price,
          category: this.product.category,
          brand: this.product.brand,
          quantityInStock: this.product.quantityInStock,
          sku: this.product.sku,
          weight: this.product.weight,
          dimensions: this.product.dimensions,
          color: this.product.color,
          imageUrl: this.product.imageUrl,
          status: this.product.status,
        });
      })
    });
  }

  goList() {
    this._router.navigate([`/list-products`]);
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      this.srv.update(this.productForm.value).subscribe(response => this.goList())
    } else {
      console.log("produto invalido")
    }
  }
}
