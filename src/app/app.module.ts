import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import {WordsState} from '../store/words/words.state';
import { WordsComponent } from './words/words.component';
import { PictureComponent } from './picture/picture.component';
import {PictureState} from '../store/picture/picture.state';


@NgModule({
  declarations: [
    AppComponent,
    WordsComponent,
    PictureComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([
      WordsState,
      PictureState
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
