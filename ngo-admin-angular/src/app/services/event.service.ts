import { Injectable } from "@angular/core";
import { EvnetRepository } from "../repository/event.repository";

@Injectable()
export class EvnetService {
    constructor( 
        private eventRepo:EvnetRepository) { }

    addEvent(data : any){
        return this.eventRepo.addEvent(data);
    }
}