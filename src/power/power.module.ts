import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService], //By default this is private so we need to add exports property
  exports: [PowerService]
})
export class PowerModule {}
