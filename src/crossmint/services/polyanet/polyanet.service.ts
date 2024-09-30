import { Injectable } from '@nestjs/common';
import { IPolyanet } from '@types';
import { AstralObjectService } from '../base';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class PolyanetService extends AstralObjectService {
  constructor(protected readonly httpService: HttpService) {
    super(httpService);
  }

  async createPolyanet(
    candidateId: string,
    polyanet: IPolyanet,
  ): Promise<void> {
    return this.createAstralObject(candidateId, 'polyanets', polyanet);
  }

  async deletePolyanet(
    candidateId: string,
    polyanet: IPolyanet,
  ): Promise<void> {
    return this.deleteAstralObject(candidateId, 'polyanets', polyanet);
  }
}
