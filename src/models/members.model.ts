import { IActions } from './actions.model';

export type IMember = {
    readonly type: 'human';
    readonly id: number;
    readonly name: string;
    readonly actions: IActions;
  };
