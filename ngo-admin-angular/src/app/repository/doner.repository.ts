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
        let formData = new FormData()
        console.log("-----"+data.imageInPut);
		if(data.imageInPut)
            formData.append('imageInPut', data.imageInPut);
        if(data.id)
            formData.append('id', data.id);
            formData.append('donerName', data.donerName);
            formData.append('contactNumber', data.contactNumber);
            formData.append('donerEmail', data.donerEmail);
            formData.append('dateOfDonation', data.dateOfDonation);
            formData.append('typeofDonation',data.typeofDonation);
            formData.append('reason', data.reason);
            formData.append('donationDescription', data.donationDescription);
            formData.append('isPresent', data.isPresent);
            formData.append('isImageUpload', data.isImageUpload);
        console.log(FormData);

        return this.apiClient.doPublicPost(DONER_ADD,formData);
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

