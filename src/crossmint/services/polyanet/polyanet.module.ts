import { Module } from '@nestjs/common';
import { PolyanetService } from './polyanet.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [PolyanetService],
  exports: [PolyanetService],
})
export class PolyanetModule {}
