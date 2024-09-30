import { Module } from '@nestjs/common';
import { SoloonService } from './soloon.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [SoloonService],
  exports: [SoloonService],
})
export class SoloonModule {}
