import { Injectable } from "@angular/core";
import { ApiClientRepository } from "../common/Apiclient.repository";
import { BASE_URL, EVENT_ADD } from "../common/url";

@Injectable()
export class EvnetRepository {
    
    constructor( 
        private apiClient:ApiClientRepository) { }
    
    addEvent(data : any){
        return this.apiClient.doPublicPost(EVENT_ADD , data);
    }

}