import { Entity, Entities } from '../models/entities.model';

export const toEntities = (arr: Entity[]): Entities =>
  arr.reduce((acc, cur) => ({ ...acc, [cur.id]: cur }), {});
