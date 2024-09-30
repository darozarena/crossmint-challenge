import { IAstralObject } from './astral-object';

export type TSoloonColor = 'BLUE' | 'RED' | 'PURPLE' | 'WHITE';

export interface ISoloon extends IAstralObject {
  type: 'SOLOON';
  color: TSoloonColor;
}
