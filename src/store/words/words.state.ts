import {Action, Selector, State, StateContext} from '@ngxs/store';
import {GenerateWords, TakeGuess} from './words.actions';
import randomWords from 'random-words';
import {LoadPicture} from '../picture/picture.actions';

const TOTAL_WORDS = 5;

export interface WordsModel {
  words: string[];
  word: string;
  guess: string;
  correct: boolean;
}

@State<WordsModel>({
  name: 'words',
  defaults: {
    words: [],
    word: '',
    guess: '',
    correct: false
  }
})

export class WordsState {
  @Selector()
  static getWords(state: WordsModel) {
    return state.words;
  }

  @Selector()
  static getGuess(state: WordsModel) {
    return state.guess;
  }

  @Selector()
  static getCorrect(state: WordsModel) {
    return state.correct;
  }

  @Action(GenerateWords)
  generateWords(ctx: StateContext<WordsModel>, action: GenerateWords) {
    const words = randomWords(TOTAL_WORDS);
    const state = ctx.getState();
    const word = words[Math.floor(Math.random() * TOTAL_WORDS)];
    ctx.setState({
      ...state,
      words,
      word
    });
    ctx.dispatch(new LoadPicture(word));
  }

  @Action(TakeGuess)
  takeGuess(ctx: StateContext<WordsModel>, { payload }: any) {
    const state = ctx.getState();
    const guess = payload.guess;
    const correct = state.word === guess;
    ctx.setState({
      ...state,
      correct,
      guess
    })
  }
}