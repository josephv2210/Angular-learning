import { Component, signal } from '@angular/core';
import { CounterSignal } from '../../components/counter-signal/counter-signal';

@Component({
  selector: 'app-counter-page',
  imports: [CounterSignal],
  templateUrl: './counter-page.html',
  styleUrl: './counter-page.css',
})
export class CounterPage {
  // propiedades no reactivas
  counter = 0;
  title = 'Counter Page';

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  reset() {
    this.counter = 0;
  }

  isDisabled() {
    if (this.counter === 0) {
      return true;
    } else {
      return false;
    }
  }
}
