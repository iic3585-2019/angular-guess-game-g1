import { Component, OnInit, Input } from '@angular/core';
import {Store, Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {TakeGuess} from '../../store/words/words.actions';
import {WordsState} from '../../store/words/words.state';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss']
})
export class WordComponent implements OnInit {
  guess: string;
  correctWord: string;
  correct: boolean;
  @Input() word: string;
  @Select(WordsState.getGuess) guessO: Observable<string>;
  @Select(WordsState.getWord) wordO: Observable<string>;
  @Select(WordsState.getCorrect) correctO: Observable<boolean>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.guessO.subscribe(newGuess => this.guess = newGuess);
    this.wordO.subscribe(newWord => this.correctWord = newWord);
    this.correctO.subscribe(newCorrect => this.correct = newCorrect);
  }

  takeGuess() {
    this.store.dispatch(new TakeGuess({ guess: this.word }));
  }

  setClasses() {
    const classes = {
      'is-correct': this.guess !== '' && this.word === this.correctWord,
      'is-incorrect': this.word === this.guess && !this.correct
    };
    return classes;
  }

}
