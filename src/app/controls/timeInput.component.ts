import { Component, Input } from '@angular/core';

@Component({
  selector: 'time-input',
  templateUrl: './timeInput.component.html'
})
export class TimeInputComponent {
  @Input() label: string;
}
