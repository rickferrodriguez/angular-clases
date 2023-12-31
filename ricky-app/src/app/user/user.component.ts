import { Component } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgForOf, NgIf],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  games = [
    {
      id: 1,
      name: 'League of Legends',
      platform: 'PC',
    },
    {
      id: 2,
      name: 'Dota 2',
      platform: 'PC',
    },
    {
      id: 3,
      name: 'Counter Strike',
      platform: 'PC',
    },
    {
      id: 4,
      name: 'Bloodborne',
      platform: 'Console',
    },
  ];
  isPcPlatform(platform: string) {
    return platform.toLowerCase() === 'pc' ? true : false;
  }
  estoEsUnaPrueba() {
    console.log('esto es una prueba');
    return 'esto es una prueba';
  }
}
