import { Observable } from 'rxjs/Observable';
import { HttpRequesterOptions } from './../models/http-requester-options';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class HttpRequesterService {

  constructor(private httpService: Http) { }

  get(options: HttpRequesterOptions): Observable<Response> {
    const headers = new Headers(options.headers);
    console.log('get request');
    return this.httpService.get(options.url, { headers });
  }

  put(options: HttpRequesterOptions): Observable<Response> {
    const body = JSON.stringify(options.body);
    const headers = new Headers(options.headers);

    return this.httpService.put(options.url, body, { headers });
  }

  post(options: HttpRequesterOptions): Observable<Response> {
    const body = JSON.stringify(options.body);
    const headers = new Headers(options.headers);
    console.log('post request');
    return this.httpService.post(options.url, body, { headers });
  }
}
