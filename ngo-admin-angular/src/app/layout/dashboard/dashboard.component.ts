import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { DonerService } from 'src/app/services/doner.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { VolunteerService } from 'src/app/services/volunteer.service';
import { EvnetService } from 'src/app/services/event.service';
import { CommonService } from 'src/app/common/common.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
   

})
export class DashboardComponent implements OnInit {
  // [x : string]: any;


  constructor(private donerService : DonerService, private employeeService: EmployeeService,private volunteerService: VolunteerService,private eventService:EvnetService,private commonService: CommonService) { }

    doner:number;
    employee:number;
    volunteer:number;
    event:number;
    //count:any;
  ngOnInit(): void {

    setTimeout(() => {
      
      this.commonService.currentPageTitle = 'Dashboard';
    });
    this.getDonerCount();
    this.getVolunteerCount();
    this.getEmployeeCount();
    this.getEventCount();
  }
  getDonerCount() :number
  {
    this.donerService.getAllActiveDoner().subscribe((result) => {
      //console.log(result.length);
      this.doner=result.length;
      
      console.log("data "+this.doner);
      //result.length.print;
    },(error) =>{


    });
    return this.doner; 
  }

  getEventCount() :number
  {
    this.eventService.getEvent().subscribe((result) => {
      //console.log(result.length);
      this.event=result.length;
      
      console.log("data "+this.event);
      //result.length.print;
    },(error) =>{


    });
    return this.event; 
  }

  getEmployeeCount():number
  {

    this.employeeService.getAllActiveEmployee().subscribe((result) => {
      //console.log(result.length);
      this.employee=result.length;
      
      console.log("data "+this.employee);
      //result.length.print;
    },(error) =>{


    });

    return this.employee;
  }

  getVolunteerCount():number
  {

    this.volunteerService.getAllActiveVolunteer().subscribe((result) => {
      //console.log(result.length);
      this.volunteer=result.length;
      
      console.log("data "+this.volunteer);
      //result.length.print;
    },(error) =>{


    });

    return this.volunteer;
  }
      
}



