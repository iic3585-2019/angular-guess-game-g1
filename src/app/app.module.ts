import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import {WordsState} from '../store/words/words.state';
import { WordsComponent } from './words/words.component';
import { PictureComponent } from './picture/picture.component';
import {PictureState} from '../store/picture/picture.state';
import {ScoreState} from '../store/score/score.state';
import { WordComponent } from './word/word.component';
import { ScoreComponent } from './score/score.component';


@NgModule({
  declarations: [
    AppComponent,
    WordsComponent,
    PictureComponent,
    WordComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([
      WordsState,
      PictureState,
      ScoreState
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
