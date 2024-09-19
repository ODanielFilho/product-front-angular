import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'edit-button',
  standalone: true,
  imports: [],
  templateUrl: './edit-button.component.html',
  styleUrl: './edit-button.component.scss'
})
export class EditButtonComponent {
  @Output() btnClick = new EventEmitter();
}
