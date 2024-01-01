import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [NgForOf, NgIf],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css',
})
export class GamesComponent {
  @Input() userName = ""
  @Output() addFavoriteEvent = new EventEmitter<string>()

  addFavorite(gameName: string) {
    this.addFavoriteEvent.emit(gameName)
  }
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
}
