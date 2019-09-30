export type IActions = {
    readonly build: readonly any[];
    readonly explore: readonly any[];
    readonly experiment: readonly any[];
    readonly lead: readonly any[];
}

export const emptyActions: IActions = {
  build: [],
  experiment: [],
  explore: [],
  lead: [],
};
