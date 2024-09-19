import { Component } from '@angular/core';
import {AlertSuccessComponent} from "../../ui/alert-success/alert-success.component";

@Component({
  selector: 'app-product-card-delete',
  standalone: true,
  imports: [
    AlertSuccessComponent
  ],
  templateUrl: './product-delete.component.html',
  styleUrl: './product-delete.component.scss'
})
export class ProductDeleteComponent {
  message: string = '"excluído com sucesso!';
}
