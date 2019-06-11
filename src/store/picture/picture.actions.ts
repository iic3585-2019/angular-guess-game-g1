export class LoadPicture {
  static readonly type = '[Picture] LoadPicture';

  constructor(public query: string) {}
}

export class LoadPictureBegin {
  static readonly type = '[Picture] LoadPictureBegin';
}

export class LoadPictureSuccess {
  static readonly type = '[Picture] LoadPictureSuccess';

  constructor(public pictureUrl: string) {}
}
