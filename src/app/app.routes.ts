import { Routes } from '@angular/router';
import {ProductCreateComponent} from "./product/components/admin/product-create/product.create.component";
import {ProductListComponent} from "./product/components/admin/product-list/product-list.component";
import {ProductDeleteComponent} from "./product/components/admin/product-delete/product-delete.component";
import {ProductUpdateComponent} from "./product/components/admin/product-update/product-update.component";
import {ProductsComponent} from "./product/components/pages/products/products.component";
import {ProductComponent} from "./product/components/pages/product/product.component";

export const routes: Routes = [
  { path: '', component: ProductsComponent },
  // page
  { path: 'products', component: ProductsComponent },
  { path: 'product/:id', component: ProductComponent },
  // crude
  {path: 'list-products', component: ProductListComponent },
  {path: 'register-products', component: ProductCreateComponent },
  {path: 'delete-products', component: ProductDeleteComponent },
  {path: 'update-products/:id', component: ProductUpdateComponent },
];
