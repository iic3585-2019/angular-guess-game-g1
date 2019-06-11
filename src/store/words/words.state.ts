import {Action, Selector, State, StateContext} from '@ngxs/store';
import {GenerateWords} from './words.actions';
import randomWords from 'random-words';
import {LoadPicture} from '../picture/picture.actions';

const TOTAL_WORDS = 5;

export interface WordsModel {
  words: string[];
}

@State<WordsModel>({
  name: 'words',
  defaults: {
    words: []
  }
})

export class WordsState {
  @Selector()
  static getWords(state: WordsModel) {
    return state.words;
  }

  @Action(GenerateWords)
  generateWords(ctx: StateContext<WordsModel>, action: GenerateWords) {
    const words = randomWords(TOTAL_WORDS);
    const state = ctx.getState();
    ctx.setState({
      ...state,
      words
    });
    const word = words[Math.floor(Math.random() * TOTAL_WORDS)];
    ctx.dispatch(new LoadPicture(word));
  }
}
