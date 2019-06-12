import { Component, OnInit } from '@angular/core';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {ScoreState} from '../../store/score/score.state';


@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
  @Select(ScoreState.getWins) wins: Observable<number>;
  @Select(ScoreState.getTotal) total: Observable<number>;

  constructor() {}

  ngOnInit() {
  }

}
