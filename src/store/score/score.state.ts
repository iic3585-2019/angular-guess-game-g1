import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Win, Lost} from './score.actions';


export interface ScoreModel {
  wins: number;
  total: number;
}

@State<ScoreModel>({
  name: 'score',
  defaults: {
    wins: 0,
    total: 0
  }
})

export class ScoreState {
  @Selector()
  static getWins(state: ScoreModel) {
    return state.wins;
  }

  @Selector()
  static getTotal(state: ScoreModel) {
    return state.total;
  }

  @Action(Win)
  lost(ctx: StateContext<ScoreModel>, action: Win) {
    const state = ctx.getState();
    const prevTotal = state.total;
    const prevWins = state.wins;
    ctx.setState({
      ...state,
      total: prevTotal + 1,
      wins: prevWins + 1,
    });
  }

  @Action(Lost)
  win(ctx: StateContext<ScoreModel>, action: Lost) {
    const state = ctx.getState();
    const prevTotal = state.total;
    ctx.setState({
      ...state,
      total: prevTotal + 1,
    });
  }
}
