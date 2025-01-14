import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'add-button',
  standalone: true,
  imports: [],
  templateUrl: './add-button.component.html',
  styleUrl: './add-button.component.scss'
})
export class AddButtonComponent {
  @Output() btnClick = new EventEmitter();
}
