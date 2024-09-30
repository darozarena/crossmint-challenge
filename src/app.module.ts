import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MegaverseModule } from './megaverse/megaverse.module';
import { CrossmintModule } from '@crossmint/crossmint.module';

@Module({
  imports: [MegaverseModule, CrossmintModule],
  controllers: [AppController],
})
export class AppModule {}
