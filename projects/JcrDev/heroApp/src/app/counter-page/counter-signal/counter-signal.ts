import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'counter-signal',
  imports: [],
  templateUrl: './counter-signal.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterSignal {
  // propiedades reactivas con señales
  counterSignal = signal(0);
  titleSignal = signal('Counter Page Señal');

  // Metodos con signal

  decrementSignal() {
    // this.counterSignal.set() // si el valor no depende del valor anterior
    this.counterSignal.update((current) => current - 1); // si el valor depende del valor anterior
  }

  resetSignal() {
    this.counterSignal.set(0); // si el valor no depende del valor anterior
  }

  incrementSignal() {
    this.counterSignal.update((current) => current + 1); // si el valor depende del valor anterior
  }

  isDisabledSignal() {
    if (this.counterSignal() === 0) {
      return true;
    } else {
      return false;
    }
  }
}
