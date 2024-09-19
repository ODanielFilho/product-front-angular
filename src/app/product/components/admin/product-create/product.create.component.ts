import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ProductService} from "../../../service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-card-create',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './product.create.component.html',
  styleUrl: './product.create.component.scss'
})
export class ProductCreateComponent implements OnInit {
  productForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private srv: ProductService,
    private _router: Router
    ) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
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
  }

  goList() {
    this._router.navigate([`/list-products`]);
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      this.srv.create(this.productForm.value).subscribe(response => this.goList())
    } else {
      console.log("produto invalido")
    }
  }
}
