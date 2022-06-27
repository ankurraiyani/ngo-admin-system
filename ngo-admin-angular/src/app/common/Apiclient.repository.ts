import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ApiClientRepository {

    constructor( 
        private httpClient: HttpClient) { }

    doPublicPost(url : any ,data : any): Observable<any> {
        return this.httpClient.post(url,data,{ headers: this.getAuthenticationHeader() });
    }

    private getAuthenticationHeader(): HttpHeaders {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return headers;
    }

}