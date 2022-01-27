import { Controller, Get, Post, Query } from "@nestjs/common";
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  public async getHello(@Query() query) {
    return AppService.getHello(query);
  }
}
