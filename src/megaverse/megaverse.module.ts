import { Module } from '@nestjs/common';
import { MegaverseService } from './megaverse.service';
import { CrossmintModule } from '@crossmint/crossmint.module';
import { ParseMegaverseService, CreateAstralObjectService } from './services';

@Module({
  imports: [CrossmintModule],
  providers: [
    MegaverseService,
    ParseMegaverseService,
    CreateAstralObjectService,
  ],
  exports: [MegaverseService],
})
export class MegaverseModule {}
