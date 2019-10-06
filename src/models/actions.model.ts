import { Entity } from './entities.model';

export type TActions = {
    readonly build: readonly Action[];
    readonly explore: readonly Action[];
    readonly experiment: readonly Action[];
    readonly lead: readonly Action[];
}
export interface Action extends Entity {
  name: string;
  time: number;
}

export type TActionEntitities = {
  [id: string]: Action;
}
export const emptyActions: TActions = {
  build: [] as Action[],
  experiment: [] as Action[],
  explore: [] as Action[],
  lead: [] as Action[],
};
