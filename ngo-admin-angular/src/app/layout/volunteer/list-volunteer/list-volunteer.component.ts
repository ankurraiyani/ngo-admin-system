import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';
import { VolunteerService } from 'src/app/services/volunteer.service';

@Component({
  selector: 'app-list-volunteer',
  templateUrl: './list-volunteer.component.html',
  styleUrls: ['./list-volunteer.component.css']
})
export class ListVolunteerComponent implements OnInit {

  constructor(private volunteerService: VolunteerService,
    private commonService: CommonService) { }

  volunteer: any;

  ngOnInit(): void {
    setTimeout(() => {
      this.commonService.currentPageTitle = 'Volunteer List';
    });
    this.getAllVolunteer();
  }

  getAllVolunteer() {
    this.volunteerService.getAllVolunteer().subscribe((results) => {
      this.volunteer = results;
    }, (error) => {
      this.commonService.showMessage("error", error.message)
    });
  }

}
