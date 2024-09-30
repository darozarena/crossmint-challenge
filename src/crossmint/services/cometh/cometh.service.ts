import { ICometh } from '@types';
import { Injectable } from '@nestjs/common';
import { AstralObjectService } from '../base';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class ComethService extends AstralObjectService {
  constructor(protected readonly httpService: HttpService) {
    super(httpService);
  }

  async createCometh(candidateId: string, cometh: ICometh): Promise<void> {
    const comethDTO = { ...cometh, direction: cometh.direction.toLowerCase() };
    return this.createAstralObject(candidateId, 'comeths', comethDTO);
  }

  async deleteCometh(candidateId: string, cometh: ICometh): Promise<void> {
    return this.deleteAstralObject(candidateId, 'comeths', cometh);
  }
}
