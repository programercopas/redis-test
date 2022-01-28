import { createClient } from 'redis';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RedisService {
  public static client = createClient({
    host: 'localhost',
    port: '6379',
    password: '',
    db: 0,
  });

  public static async get(key) {
    return new Promise((resolve, reject) => {
      return this.client.get(key, (err, val) => {
        if (err) {
          reject(err);
        } else {
          resolve(val);
        }
      });
    });
  }

  public static async set(key, value) {
    try {
      await this.client.set(key, value);
      return 'success set key';
    } catch (e) {
      throw e.message;
    }
  }
}
