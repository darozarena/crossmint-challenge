import { Controller, Param, Post } from '@nestjs/common';
import { MegaverseService } from './megaverse/megaverse.service';

@Controller()
export class AppController {
  constructor(private readonly megaverseService: MegaverseService) {}

  @Post('/map/:candidateId/goal')
  createMegaverse(@Param('candidateId') candidateId: string) {
    return this.megaverseService.createMegaverseFromGoal(candidateId);
  }
}
