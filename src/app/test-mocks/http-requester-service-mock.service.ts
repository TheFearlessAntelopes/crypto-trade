import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpRequesterServiceMockService {

  private paths: {} = {
    'http://localhost:3000/currency/historyPrice': {result: {Data: new Array<Array<number>>()}}
  };

  constructor() { }

  get(path: string): Observable<Response> {

    return Observable.of(new Response('test get'));
  }

  put(path: string): Observable<Response> {

    return Observable.of(new Response('test put'));
  }

  post(path: string): Observable<Response> {
    console.log('posting on' + path);
    return Observable.of(new Response('test post'));
  }
}
