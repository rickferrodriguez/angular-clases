import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GamesComponent, NgIf],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  userName = "Pepito"
  itsOn = false // esto es un estado
  favoriteGame = ''
  getFavorite(gameName: string) {
    this.favoriteGame = gameName
  }



}
