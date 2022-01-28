import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor() {}

  @Get('/:key')
  public async getKey(@Param('key') key) {
    return AppService.getKey(key);
  }

  @Post('set/key')
  public async setKey(@Body() body) {
    return AppService.setKey(body);
  }
}
