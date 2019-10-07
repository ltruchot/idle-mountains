import { Entity } from './entities.model';

export interface Action extends Entity {
  name: string;
  time: number;
  type: 'experiment' | 'build' | 'explore' | 'lead' | 'rest';
  requirements: number[];
}

export type TActionEntitities = {
  [id: string]: Action;
}
