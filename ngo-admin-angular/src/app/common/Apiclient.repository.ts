import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import Swal from "sweetalert2";

@Injectable()
export class ApiClientRepository {

    constructor( 
        private httpClient: HttpClient) { }

    doPublicPost(url : any ,data : any): Observable<any> {
        return this.httpClient.post(url,data,{ headers: this.getAuthenticationHeader() });
    }

    doPublicDelete(url : any): Observable<any> {
        return this.httpClient.delete(url);
        // return this.httpClient.delete(`${url}/${data}`,{ headers: this.getAuthenticationHeader() });
    }


    doPublicGetAll(url : any ): Observable<any> {
        return this.httpClient.get(url);
    }

    private getAuthenticationHeader(): HttpHeaders {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return headers;
    }

}