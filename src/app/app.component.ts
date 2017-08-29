import { Component,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  journey = new Journey();
  result = '--:--';

  updateResult(){
    console.log("1Something changed!")
    console.log(`1Start: ${this.journey.start}`)
    console.log(`1Break: ${this.journey.break}`)
    console.log(`1End: ${this.journey.end}`)

    setTimeout(() => {
      console.log("2Something changed!")
      console.log(`2Start: ${this.journey.start}`)
      console.log(`2Break: ${this.journey.break}`)
      console.log(`2End: ${this.journey.end}`)
    }, 1000);
  }

  ngOnChanges(changes : SimpleChanges) {
    console.log('ngOnChanges AppComponent');
    console.log(changes)
  }
}

export class Journey{
  start = '';
  break = '';
  end = '';
}