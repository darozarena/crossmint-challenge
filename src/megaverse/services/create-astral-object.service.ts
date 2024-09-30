import { CrossmintService } from '@crossmint/crossmint.service';
import { Injectable } from '@nestjs/common';
import { IAstralObject, IPolyanet, ISoloon, ICometh } from '@types';

@Injectable()
export class CreateAstralObjectService {
  constructor(private readonly crossmintService: CrossmintService) {}

  async create(
    candidateId: string,
    astralObject: IAstralObject,
  ): Promise<void> {
    switch (astralObject.type) {
      case 'POLYANET':
        await this.crossmintService.createPolyanet(
          candidateId,
          astralObject as IPolyanet,
        );
        break;
      case 'SOLOON':
        await this.crossmintService.createSoloon(
          candidateId,
          astralObject as ISoloon,
        );
        break;
      case 'COMETH':
        await this.crossmintService.createCometh(
          candidateId,
          astralObject as ICometh,
        );
        break;
      case 'SPACE':
        break;
    }
  }
}
