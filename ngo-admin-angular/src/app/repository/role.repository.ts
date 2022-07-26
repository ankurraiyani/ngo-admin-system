import { Injectable } from "@angular/core";
import { ApiClientRepository } from "../common/Apiclient.repository";
import { BASE_URL, DONER_ADD, DONER_DELETE, DONER_GETALL, DONER_GETID, DONER_ISACTIVE_DEACTIVE, EVENT_ADD, EVENT_GETALL, GET_ALL_ACTIVE_DONER, ROLE_ADD, ROLE_DELETE, ROLE_GETALL } from "../common/url";

@Injectable()
export class RoleRepository {

    // getIdDoner(data: any) {
    //     return this.apiClient.doPublicGet(DONER_GETID+"/"+data);
    // }

    constructor(
        private apiClient: ApiClientRepository) { }

    addrole(data: any) {
        //     let formData = new FormData()
        //     console.log("-----"+data.imageInPut);
        // 	if(data.imageInPut)
        //         formData.append('imageInPut', data.imageInPut);
        //     if(data.id)
        //         formData.append('id', data.id);
        //         formData.append('donerName', data.donerName);
        //         formData.append('contactNumber', data.contactNumber);
        //         formData.append('donerEmail', data.donerEmail);
        //         formData.append('dateOfDonation', data.dateOfDonation);
        //         formData.append('typeofDonation',data.typeofDonation);
        //         formData.append('reason', data.reason);
        //         formData.append('donationDescription', data.donationDescription);
        //         formData.append('isPresent', data.isPresent);
        //         formData.append('isImageUpload', data.isImageUpload);
        //     console.log(FormData);

        return this.apiClient.doPublicPost(ROLE_ADD, data);
    }
    getAllRole() {
        return this.apiClient.doPublicGet(ROLE_GETALL);
    }

    deleteRole(data: any) {
        return this.apiClient.doPublicDelete(ROLE_DELETE + "/" + data);
    }

    // getAllActiveDoner() {
    //     return this.apiClient.doPublicGet(GET_ALL_ACTIVE_DONER);
    // }

    // isActiveDeactiveDoner(donerId: any, isPresent: any) {
    //     let formData = new FormData();
    //     formData.append('donerId', donerId);
    // 	formData.append('isPresent', isPresent);
    //     return this.apiClient.doPublicPostWithoutJson(DONER_ISACTIVE_DEACTIVE,formData);

    // }


}



