import { Member } from './members.model';
import { Entity } from './entities.model';

export interface CampInfos extends Entity {
  readonly name: string;
  readonly team: readonly Member[];
  readonly equipment: readonly any[];
  readonly vehicles: readonly any[];
}
