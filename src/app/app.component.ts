import { Component } from '@angular/core';

@Component({
 selector: 'my-app',
 template: `
  <div fxLayout="column" gdGap="10px" class="container">
      <mat-toolbar fxLayout="column" fxLayoutAlign="center center" color="accent">
        <span>Guess the Number !</span>
      </mat-toolbar >
      <mat-card fxLayout="column" fxLayoutAlign="center center" class="header_card" >
          <mat-card-content fxFlex fxFlex.gt-xs="50%">
            <p class="card-text">Guess the computer generated random number between 1 and 1000.</p>
          </mat-card-content>
      </mat-card>
      <div fxLayout="row" fxLayoutAlign="center center" gdGap.xs="2px" gdGap.gt-xs="10px" >
         <label gdColumn="1" >Your Guess: </label>
         <input gdColumn="2" type="number" [value]="guess" (input)="guess = $event.target.value" />
        </div>
        <div fxLayout="row" fxLayoutAlign="center center" gdGap.xs="2px" gdGap.gt-xs="10px" >
         <button gdColumn="3"  (click)="verifyGuess()" mat-raised-button>Verify</button>
         <button gdColumn="4" (click)="initializeGame()" mat-raised-button>Restart</button>
      </div>
      <div>
        <app-message-card [deviation]="deviation"></app-message-card>
      </div>
      <p class="text-info">No of guesses :
        <button mat-mini-fab color="accent">{{noOfTries}}</button>
      </p>
  </div> 
  `
})
export class AppComponent {
  deviation: number;
  noOfTries: number;
  original: number;
  guess: number;

  constructor() {
      this.initializeGame();
  }

  initializeGame() {
      this.noOfTries = 0;
      this.original = Math.floor((Math.random() * 1000) + 1);
      this.guess = null;
      this.deviation = null;
  }

  verifyGuess() {
      this.deviation = this.original - this.guess;
      this.noOfTries = this.noOfTries + 1;
  }

}
