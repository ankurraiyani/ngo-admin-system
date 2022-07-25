import { Injectable } from "@angular/core";
import { servicedetailRepository } from "../repository/serviceDetail.repository";

@Injectable()
export class ServicedetailService {

    constructor(
        private servicedetailRepo: servicedetailRepository) { }

    addServicedetail(data:any)
    {
        return this.servicedetailRepo.addServicedetail(data);
    }

    getAllServicedetail(fetchServicedetailListParam:any)
    {
        return this.servicedetailRepo.getAllServicedetail(fetchServicedetailListParam);
    }

    deleteIdServicedetail(data:any)
    {
        return this.servicedetailRepo.deleteIdServicedetail(data);
    }

    getIdServicedetail(data: any) {
        return this.servicedetailRepo.getIdServicedetail(data);
    }

}