import { IMember } from './members.model';

export type ICampInfos = {
  readonly id: number;
  readonly name: string;
  readonly team: readonly IMember[];
  readonly equipment: readonly any[];
  readonly vehicles: readonly any[];
};
