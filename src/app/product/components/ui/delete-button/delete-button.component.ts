import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'delete-button',
  standalone: true,
  imports: [],
  templateUrl: './delete-button.component.html',
  styleUrl: './delete-button.component.scss'
})
export class DeleteButtonComponent {
  @Output() btnClick = new EventEmitter();
}
