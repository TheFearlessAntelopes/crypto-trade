import { Injectable } from '@angular/core';
import { BrowserXhr } from '@angular/http';

@Injectable()
/**
 * @author AhsanAyaz
 * We're extending the BrowserXhr to support CORS
 */
export class CustExtBrowserXhr extends BrowserXhr {
    constructor() {
        super();
    }
    build(): any {
        const xhr = super.build();

        xhr.withCredentials = true;
        return <any>(xhr);
    }
}
