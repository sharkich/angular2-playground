import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div>
      <span>{{ counter }}</span>
      <p>
        <button (click)="inc()" class="inc">inc</button>
        <button (click)="dec()" class="dec">dec</button>
      </p>
    </div>
`,
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input()
  start: number;

  counter: number;

  @Output()
  result: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.counter = this.start || 0;
  }

  inc() {
    this.counter++;
    this.result.emit(this.counter);
  }

  dec() {
    this.counter--;
    this.result.emit(this.counter);
  }

}
