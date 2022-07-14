import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import Swal from "sweetalert2";
import { __param } from "tslib";

@Injectable()
export class ApiClientRepository {
    constructor(
        private httpClient: HttpClient) { }

    // doPublicPost(url : any ,data : any): Observable<any> {
    //     return this.httpClient.post(url,data,{ headers: this.getAuthenticationHeader() });
    // }

    doPublicPost(url: any, data: any): Observable<any> {
        return this.httpClient.post(url, data);
    }

    doPublicGet(url: any): Observable<any> {
        return this.httpClient.get(url);
    }


    doPublicDelete(url: any): Observable<any> {
        return this.httpClient.delete(url);
    }
    // private getAuthenticationHeader(): HttpHeaders {
    //     let headers = new HttpHeaders({
    //         'Content-Type': 'application/json',
    //     });
    //     return headers;
    // }
    doPublicPostWithoutJson(url: any, data: any): Observable<any> {
        return this.httpClient.post(url, data);
    }



}