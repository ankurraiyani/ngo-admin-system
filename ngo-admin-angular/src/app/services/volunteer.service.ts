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
    getAllVolunteer()
    {
        return this.volunteerRepo.getAllVolunteer();
    }
}