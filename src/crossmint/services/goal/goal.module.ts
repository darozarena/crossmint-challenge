import { Module } from '@nestjs/common';
import { GoalService } from './goal.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [GoalService],
  exports: [GoalService],
})
export class GoalModule {}
