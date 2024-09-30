import { Injectable } from '@nestjs/common';
import { IPolyanet, ISoloon, ICometh } from '@types';
import {
  ComethService,
  GoalService,
  PolyanetService,
  SoloonService,
} from './services';
import { GoalDTO } from './interfaces/crossmint.contract';

@Injectable()
export class CrossmintService {
  constructor(
    private readonly polyanetService: PolyanetService,
    private readonly soloonService: SoloonService,
    private readonly comethService: ComethService,
    private readonly goalService: GoalService,
  ) {}

  async getGoalMap(candidateId: string): Promise<GoalDTO> {
    return this.goalService.getGoalMap(candidateId);
  }

  async createPolyanet(
    candidateId: string,
    polyanet: IPolyanet,
  ): Promise<void> {
    return this.polyanetService.createPolyanet(candidateId, polyanet);
  }

  async createSoloon(candidateId: string, soloon: ISoloon): Promise<void> {
    return this.soloonService.createSoloon(candidateId, soloon);
  }

  async createCometh(candidateId: string, cometh: ICometh): Promise<void> {
    return this.comethService.createCometh(candidateId, cometh);
  }

  async deletePolyanet(
    candidateId: string,
    polyanet: IPolyanet,
  ): Promise<void> {
    return this.polyanetService.deletePolyanet(candidateId, polyanet);
  }

  async deleteSoloon(candidateId: string, soloon: ISoloon): Promise<void> {
    return this.soloonService.deleteSoloon(candidateId, soloon);
  }

  async deleteCometh(candidateId: string, cometh: ICometh): Promise<void> {
    return this.comethService.deleteCometh(candidateId, cometh);
  }
}
