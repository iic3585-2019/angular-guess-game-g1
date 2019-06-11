import {Action, Selector, State, StateContext} from '@ngxs/store';
import {LoadPicture, LoadPictureBegin, LoadPictureSuccess} from './picture.actions';

import {environment} from '../../environments/environment';

const URL_BASE = 'https://api.unsplash.com';

export interface PictureModel {
  pictureUrl: string;
  loading: boolean;
}

@State<PictureModel>({
  name: 'picture',
  defaults: {
    pictureUrl: '',
    loading: false
  }
})

export class PictureState {
  @Selector()
  static getUrl(state: PictureModel) {
    return state.pictureUrl;
  }

  @Selector()
  static getLoading(state: PictureModel) {
    return state.loading;
  }

  @Action(LoadPicture)
  async loadPicture(ctx: StateContext<PictureModel>, action: LoadPicture) {
    ctx.dispatch(new LoadPictureBegin());
    const {results} = await fetch(URL_BASE + `/search/photos?query=${
      action.query
    }&client_id=${environment.apiSecret}`)
      .then(r => r.json());
    const url = results[0].urls.raw;
    ctx.dispatch(new LoadPictureSuccess(url));
  }

  @Action(LoadPictureBegin)
  loadPictureBegin(ctx: StateContext<PictureModel>, action: LoadPictureBegin) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      loading: true
    });
  }

  @Action(LoadPictureSuccess)
  loadPictureSuccess(ctx: StateContext<PictureModel>, action: LoadPictureSuccess) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      pictureUrl: action.pictureUrl,
      loading: false
    });
  }
}
