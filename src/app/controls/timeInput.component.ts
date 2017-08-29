import { Component, Input, EventEmitter, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'time-input',
  templateUrl: './timeInput.component.html'
})
export class TimeInputComponent {
  @Input() label: string;
  @Input() value: string;
  @Output() valueChanged = new EventEmitter<void>();

  onInput(){
    console.log(`Input ${this.label} changed to ${this.value}`)
    this.valueChanged.emit();
  }

  ngOnChanges(changes : SimpleChanges) {
    console.log('ngOnChanges');
    console.log(changes)
  }
}
