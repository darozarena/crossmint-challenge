import { Module } from '@nestjs/common';
import { ComethService } from './cometh.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [ComethService],
  exports: [ComethService],
})
export class ComethModule {}
