import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './core/layouts/navbar/navbar';
import { Footer } from './core/layouts/footer/footer';

// Este es un decorador, en donde le dice que va a ejecutar
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Herooo');

  nombre: string = 'Joseph';
}
