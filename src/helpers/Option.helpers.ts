import {
  getOrElse, Option, some, none,
} from 'fp-ts/lib/Option';

export const prop = (key: string) =>
  (opt: Option<any>): Option<any> => {
    const o = getOrElse(() => ({} as Record<string, any>))(opt);
    return (o[key] ? some(o[key]) : none);
  };
