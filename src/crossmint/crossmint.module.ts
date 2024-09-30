import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CrossmintService } from './crossmint.service';
import {
  ComethModule,
  GoalModule,
  PolyanetModule,
  SoloonModule,
} from './services';

@Module({
  imports: [HttpModule, PolyanetModule, ComethModule, SoloonModule, GoalModule],
  providers: [CrossmintService],
  exports: [CrossmintService],
})
export class CrossmintModule {}
