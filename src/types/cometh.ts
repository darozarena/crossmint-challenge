import { IAstralObject } from './astral-object';

export type TComethDirection = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

export interface ICometh extends IAstralObject {
  type: 'COMETH';
  direction: TComethDirection;
}
