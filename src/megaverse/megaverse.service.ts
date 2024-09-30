import { Injectable } from '@nestjs/common';
import { TMegaverse } from '../types';
import { CrossmintService } from '@crossmint/crossmint.service';
import { CreateAstralObjectService, ParseMegaverseService } from './services';

@Injectable()
export class MegaverseService {
  constructor(
    private readonly crossmintService: CrossmintService,
    private readonly parseMegaverseService: ParseMegaverseService,
    private readonly createAstralObjectService: CreateAstralObjectService,
  ) {}

  async createMegaverseFromGoal(candidateId: string): Promise<TMegaverse> {
    const goalDto = await this.crossmintService.getGoalMap(candidateId);
    const megaverseMap: TMegaverse =
      this.parseMegaverseService.parseFromGoal(goalDto);

    for (let row = 0; row < megaverseMap.length; row++) {
      for (let col = 0; col < megaverseMap[row].length; col++) {
        const object = megaverseMap[row][col];
        await this.createAstralObjectService.create(candidateId, object);
      }
    }

    return megaverseMap;
  }
}
