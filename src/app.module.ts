import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { CharModule } from './char/char.module';

@Module({
  imports: [UserModule, PrismaModule, CharModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
