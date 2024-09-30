export interface IAstralObject {
  row: number;
  column: number;
  type: TAstralObjectType;
}

export type TAstralObjectType = 'SPACE' | 'POLYANET' | 'SOLOON' | 'COMETH';
