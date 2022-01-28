import { Injectable } from '@nestjs/common';
import { RedisService } from './redis.service';

@Injectable()
export class AppService {

  static async getKey(key): Promise<any> {
    const data = await RedisService.get(key);
    console.log(data);
    return data;
  }

  static async setKey(body): Promise<any> {
    const data = await RedisService.set(body.key, body.value);
    console.log(data);
    return data;
  }
}
