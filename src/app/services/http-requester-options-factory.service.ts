import { HttpRequesterOptions } from './../models/http-requester-options';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpRequesterOptionsFactoryService {

  constructor() { }

  createRequestOptions(url: string, body = {}, headers = {}): HttpRequesterOptions {
    if (typeof body !== 'object') {
      body = { body };
    }

    return { url, body, headers };
  }
}
