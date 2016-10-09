import { ActionReducer, Action } from '@ngrx/store';

export const UNREAD = 'UNREAD';
export const READ = 'READ';

export const messageReducer: ActionReducer<boolean> = (state: boolean = false, action: Action) => {
  switch (action.type) {
    case READ:
      return true;
    case UNREAD:
      return false;
    default:
      return state;
  }
};
