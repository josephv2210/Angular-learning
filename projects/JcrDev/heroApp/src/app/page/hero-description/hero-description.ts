import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-hero-description',
  imports: [],
  templateUrl: './hero-description.html',
})
export class HeroDescription {
  nameHero = signal('Superman');
  ageHero = signal(40);
  isVisible = signal(false);

  changeName() {
    this.nameHero.set('Batman');
  }

  changeAge() {
    this.ageHero.set(45);
  }

  // se ejecuta cada vez que se llama a la función, no es reactiva
  showDescription() {
    console.log('no computed');
    if (this.isVisible()) {
      const description = `${this.nameHero()} is ${this.ageHero()} years old.`;
      return description;
    } else {
      return 'descripcion oculta';
    }
  }

  // Señales computadas
  // solo se ejecuta cuando realmente hay un cambio en las señales que se usan dentro de la función
  showDescriptionHero = computed(() => {
    console.log('computed');
    if (this.isVisible()) {
      const description = `${this.nameHero()} is ${this.ageHero()} years old.`;
      return description;
    } else {
      return 'descripcion oculta';
    }
  });

  changeVisibility() {
    this.isVisible.set(!this.isVisible());
  }

  reset() {
    this.nameHero.set('Superman');
    this.ageHero.set(40);
    this.isVisible.set(false);
  }
}
