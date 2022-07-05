import { Injectable } from "@angular/core";
import { VolunteerRepository } from "../repository/volunteer.repository";

@Injectable()
export class VolunteerService {
    
   
    constructor( 
        private volunteerRepo:VolunteerRepository) { }
 
    addVolunteer(data : any)
    {
        return this.volunteerRepo.addVolunteer(data);
    }
    getAllVolunteer(fetchVolunteerListParam : any)
    {
        return this.volunteerRepo.getAllVolunteer(fetchVolunteerListParam);
    }

    getIdVolunteer(data: any) {
        return this.volunteerRepo.getIdVolunteer(data);
    }

    deleteIdVolunteer(id:any)
    {
        return this.volunteerRepo.deleteIDVolunteer(id);
    }

    isActiveDeactiveVolunteer(volunteerId: any,isActive : any) {
      return this.volunteerRepo.isActiveDeactiveVolunteer(volunteerId,isActive);
    }

    getAllActiveVolunteer() {
        return this.volunteerRepo.getAllActiveVolunteer();
    }

}