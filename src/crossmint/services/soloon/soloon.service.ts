import { Injectable } from '@nestjs/common';
import { ISoloon } from '@types';
import { AstralObjectService } from '../base';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class SoloonService extends AstralObjectService {
  constructor(protected readonly httpService: HttpService) {
    super(httpService);
  }

  async createSoloon(candidateId: string, soloon: ISoloon): Promise<void> {
    const soloonDTO = { ...soloon, color: soloon.color.toLowerCase() };
    return this.createAstralObject(candidateId, 'soloons', soloonDTO);
  }

  async deleteSoloon(candidateId: string, soloon: ISoloon): Promise<void> {
    return this.deleteAstralObject(candidateId, 'soloons', soloon);
  }
}
