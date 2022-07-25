import { Injectable } from "@angular/core";
import { ApiClientRepository } from "../common/Apiclient.repository";
import { SERVICEDETAIL_ADD, SERVICEDETAIL_DELETE, SERVICEDETAIL_GETALL, SERVICEDETAIL_GETID } from "../common/url";

@Injectable()
export class servicedetailRepository {
   constructor(private apiClient:ApiClientRepository ) { }
    
    addServicedetail(data : any){
        return this.apiClient.doPublicPost(SERVICEDETAIL_ADD , data);
    }

    getAllServicedetail(fetchServicedetailListParam : any)
    {
        return this.apiClient.doPublicPost(SERVICEDETAIL_GETALL,fetchServicedetailListParam);
    }

    deleteIdServicedetail(data:any)
    {
        return this.apiClient.doPublicDelete(SERVICEDETAIL_DELETE+"/"+data);
    }

    getIdServicedetail(data: any) {
        return this.apiClient.doPublicGet(SERVICEDETAIL_GETID+"/"+data);
    }
        
}