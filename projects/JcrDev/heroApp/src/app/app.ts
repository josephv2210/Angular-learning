import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Este es un decorador, en donde le dice que va a ejecutar
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Herooo');

  nombre: string = 'Joseph';
}
