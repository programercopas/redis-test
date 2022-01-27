import { Injectable } from '@nestjs/common';
import { RedisService } from "./redis.service";

@Injectable()
export class AppService {
  static async getHello(query): Promise<any> {
    const data = await RedisService.get(query.id);
    console.log(data);
    return "tes";
  }


}
