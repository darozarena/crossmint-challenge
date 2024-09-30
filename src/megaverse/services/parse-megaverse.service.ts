import { GoalDTO } from '@crossmint/interfaces/crossmint.contract';
import { Injectable } from '@nestjs/common';
import {
  IAstralObject,
  TAstralObjectType,
  IPolyanet,
  TSoloonColor,
  ISoloon,
  TComethDirection,
  ICometh,
  TMegaverse,
} from '@types';

@Injectable()
export class ParseMegaverseService {
  public parseFromGoal(goalDTO: GoalDTO): TMegaverse {
    return goalDTO.goal.map((row, rowIndex) =>
      row.map((cell, colIndex) => this.categorize(cell, rowIndex, colIndex)),
    );
  }

  private categorize(
    cell: string,
    rowIndex: number,
    colIndex: number,
  ): IAstralObject {
    const [type] = cell.split('_');
    const baseObject = {
      row: rowIndex,
      column: colIndex,
      type: type as TAstralObjectType,
    };

    switch (type) {
      case 'POLYANET':
        return {
          row: rowIndex,
          column: colIndex,
          type: type as TAstralObjectType,
        } as IPolyanet;
      case 'BLUE':
      case 'RED':
      case 'PURPLE':
      case 'WHITE':
        return {
          ...baseObject,
          type: 'SOLOON',
          color: type as TSoloonColor,
        } as ISoloon;
      case 'UP':
      case 'DOWN':
      case 'LEFT':
      case 'RIGHT':
        return {
          ...baseObject,
          type: 'COMETH',
          direction: type as TComethDirection,
        } as ICometh;
      default:
        return baseObject;
    }
  }
}
