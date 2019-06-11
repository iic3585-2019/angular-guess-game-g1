import { Component, OnInit } from '@angular/core';
import {Store, Select} from '@ngxs/store';
import {WordsState} from '../../store/words/words.state';
import {Observable} from 'rxjs';
import {GenerateWords} from '../../store/words/words.actions';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent implements OnInit {

  constructor(private store: Store) { }

  @Select(WordsState.getWords) words: Observable<string[]>;

  ngOnInit() {
    this.store.dispatch(new GenerateWords());
  }

}
