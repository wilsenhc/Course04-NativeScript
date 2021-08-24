import { Injectable } from '@angular/core';

import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProcessHTTPMsgService {

    constructor() { }

    public extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    public handleError(error: HttpErrorResponse | any) {
        let errMsg: string;

        if (error.error instanceof HttpErrorResponse) {
            errMsg = error.error.message;
        } else {
            errMsg = `${error.status} - ${error.statusText || ''} ${error.message}`;
        }

        return throwError(errMsg);
    }
}
