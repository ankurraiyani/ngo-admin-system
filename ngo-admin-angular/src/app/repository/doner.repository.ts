import { Injectable } from "@angular/core";
import { ApiClientRepository } from "../common/Apiclient.repository";
import { BASE_URL, DONER_ADD, DONER_DELETE, DONER_GETALL, DONER_GETID, DONER_ISACTIVE_DEACTIVE, EVENT_ADD, EVENT_GETALL, GET_ALL_ACTIVE_DONER } from "../common/url";

@Injectable()
export class DonerRepository {
   
    getIdDoner(data: any) {
        return this.apiClient.doPublicGet(DONER_GETID+"/"+data);
    }
    
    constructor( 
        private apiClient:ApiClientRepository) { }
    
    addDoner(data:any)
    {
        return this.apiClient.doPublicPost(DONER_ADD,data);
    }
    getAllDoner(fetchDonerListParam:any)
    {
        return this.apiClient.doPublicPost(DONER_GETALL,fetchDonerListParam);
    }

    deleteDoner(data:any)
    {
        return this.apiClient.doPublicDelete(DONER_DELETE+"/"+data);
    }

    getAllActiveDoner() {
        return this.apiClient.doPublicGet(GET_ALL_ACTIVE_DONER);
    }

    isActiveDeactiveDoner(donerId: any, isPresent: any) {
        let formData = new FormData();
        formData.append('donerId', donerId);
		formData.append('isPresent', isPresent);
        return this.apiClient.doPublicPostWithoutJson(DONER_ISACTIVE_DEACTIVE,formData);
   
    }

    
}