import { ICampInfos } from '../models/camps.model';

export const campsData: readonly ICampInfos[] = [{
  name: 'Erebus base camp',
  id: 0,
  team: [{
    type: 'human',
    name: 'Professeur Lake',
    id: 0,
    actions: {
      build: [],
      explore: [],
      experiment: [{ name: 'Lire articles de biologie polaire', time: 180, id: 0 }],
      lead: [],
    },
  }],
  equipment: [],
  vehicles: [],
}];
