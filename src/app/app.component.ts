import { Component } from '@angular/core';
import { loremIpsum } from 'lorem-ipsum';
loremIpsum({
  count: 1, // Number of "words", "sentences", or "paragraphs"
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  generateRandomText() {
    return loremIpsum({
      count: 1,
      units: 'sentences',
      sentenceLowerBound: 3,
      sentenceUpperBound: 5,
    });
  }
  randomText = this.generateRandomText();

  //Get User Input
  userInput = '';
  winner = false;
  getUserInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.userInput = target.value;
    this.userInput === this.randomText
      ? (this.winner = true)
      : (this.winner = false);
    console.log(this.userInput);
  }

  compare(letter: string, userLetter: string) {
    if (!userLetter) return 'pending';

    return letter === userLetter ? 'match' : 'wrong';
  }
  //Play again Button
  reset() {
    this.winner = false;
    this.randomText = this.generateRandomText();
    const input = document.querySelector('.typing-input') as HTMLInputElement;
    input.value = '';
  }
}
