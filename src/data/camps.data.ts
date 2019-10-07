import { CampInfos } from '../models/camps.model';

export const campsData: readonly CampInfos[] = [{
  name: 'Erebus base camp',
  id: 0,
  team: [{
    type: 'human',
    name: 'Professeur Lake',
    id: 0,
    inventory: [0, 1, 1, 2],
    actions: [
      {
        type: 'experiment',
        name: 'Lire articles de biologie polaire',
        time: 180,
        id: 0,
        requirements: [0, 1],
      },
    ],
  }],
  equipment: [],
  vehicles: [],
}];
