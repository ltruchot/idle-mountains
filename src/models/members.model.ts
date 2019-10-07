import { Action } from './actions.model';
import { Entity } from './entities.model';

export interface Member extends Entity {
    readonly type: 'human';
    readonly name: string;
    readonly inventory: number[];
    readonly actions: Action[];
  }
