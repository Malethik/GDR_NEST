import { Module } from '@nestjs/common';
import { CharService } from './char.service';
import { CharController } from './char.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CharController],
  providers: [CharService, PrismaService],
})
export class CharModule {}
