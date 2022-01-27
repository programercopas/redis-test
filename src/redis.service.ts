import { createClient } from "redis";

export class RedisService {
  public static client = createClient({
    host: "localhost",
    port: "6379",
    password: "",
    db: 0
  });

  public static set(key: string, value: any, serialize: boolean = false) {
    return new Promise((resolve, reject) => {
      let targetValue = value;

      if (serialize) {
        try {
          targetValue = JSON.stringify(value, null, 2);
        } catch (err) {
          reject(err);
        }
      }

      this.client.set(key, targetValue, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(true);
        }
      });
    });
  }

  public static get<T = any>(key: string, deserialize: boolean = false): Promise<T> {
    return new Promise((resolve, reject) => {
      return this.client.get(key, (err, value) => {
        if (err) {
          reject(err);
        } else {
          let targetValue = value;
          if (deserialize) {
            targetValue = JSON.parse(targetValue);
          }

          resolve(targetValue as any as T);
        }
      });
    });
  }

  public static expire(key: string, seconds: number) {
    return new Promise((resolve, reject) => {
      this.client.expire(key, seconds, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(true);
        }
      });
    });
  }
}