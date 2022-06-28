import { Injectable } from "@angular/core";
import { DonerRepository } from "../repository/doner.repository";
import { EvnetRepository } from "../repository/event.repository";

@Injectable()
export class DonerService {
    showMessage: any;
    constructor( 
        private donerRepo:DonerRepository) { }

    addDoner(data:any)
    {
        return this.donerRepo.addDoner(data);
    }
    getAllDoner()
    {
        return this.donerRepo.getAllDoner();
    }
}