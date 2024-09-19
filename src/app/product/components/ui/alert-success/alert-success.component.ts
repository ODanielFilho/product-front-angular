import {Component, Input} from '@angular/core';

@Component({
  selector: 'alert-success',
  standalone: true,
  imports: [],
  templateUrl: './alert-success.component.html',
  styleUrl: './alert-success.component.scss'
})
export class AlertSuccessComponent {
  @Input()
  message: string = 'sucesso!';
}