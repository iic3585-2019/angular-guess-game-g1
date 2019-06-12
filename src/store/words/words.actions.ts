export class GenerateWords {
  static readonly type = '[Words] GenerateWords';
}

export class TakeGuess {
  static readonly type = '[Words] TakeGuess';
  constructor(public payload: { guess: string }) {}
}
