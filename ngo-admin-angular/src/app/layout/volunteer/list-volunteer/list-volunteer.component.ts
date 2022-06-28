import { Component, OnInit } from '@angular/core';
import { VolunteerService } from 'src/app/services/volunteer.service';

@Component({
  selector: 'app-list-volunteer',
  templateUrl: './list-volunteer.component.html',
  styleUrls: ['./list-volunteer.component.css']
})
export class ListVolunteerComponent implements OnInit {

  constructor(private volunteerService : VolunteerService) { }
  volunteer : any[];
  ngOnInit(): void {

    console.log("List Volunteer");

    this.volunteerService.getAllVolunteer().subscribe((results)=>{
      console.log("done");
      this.volunteer=results as any[];
    },(error)=>{

    });

  }

}
