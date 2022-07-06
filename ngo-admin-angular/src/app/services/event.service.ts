import { Injectable } from "@angular/core";
import { EVENT_DELETE } from "../common/url";
import { EvnetRepository } from "../repository/event.repository";

@Injectable()
export class EvnetService {


    constructor(
        private eventRepo: EvnetRepository) { }

    addEvent(data: any) {
        return this.eventRepo.addEvent(data);
    }

    getAllEvent(fetchEventListParam: any) {
        return this.eventRepo.getAllEvent(fetchEventListParam);
    }

    deleteIdEvent(data: any) {
        return this.eventRepo.deleteIdEvent(data);
    }

    getIdEvent(data: any) {
        return this.eventRepo.getIdEvent(data);
    }

}