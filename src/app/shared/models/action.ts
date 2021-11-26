import { environment } from 'src/environments/environment';

export class Action {
  constructor(public readonly type: string, public payload: any) {
    if (!environment.production) {
      console.log(type);
    }
  }
}
