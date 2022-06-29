import { Injectable } from "@angular/core";
import { ApiClientRepository } from "../common/Apiclient.repository";
import { BASE_URL, EVENT_ADD, EVENT_DELETE, EVENT_GETALL } from "../common/url";

@Injectable()
export class EvnetRepository {
   
    constructor(private apiClient:ApiClientRepository ) { }
    
    addEvent(data : any){
        return this.apiClient.doPublicPost(EVENT_ADD , data);
    }

    getAllEvent(fetchEventListParam:any) {
       return this.apiClient.doPublicPost(EVENT_GETALL,fetchEventListParam);
    }


    deleteIdEvent(data : any)
    {
        return this.apiClient.doPublicDelete(EVENT_DELETE+"/"+data);
    }
        
}