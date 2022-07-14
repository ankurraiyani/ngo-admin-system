import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { DonerService } from 'src/app/services/doner.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { VolunteerService } from 'src/app/services/volunteer.service';
import { EvnetService } from 'src/app/services/event.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
   

})
export class DashboardComponent implements OnInit {
  // [x : string]: any;

 


  constructor(private donerService : DonerService, private employeeService: EmployeeService,private volunteerService: VolunteerService,private eventService:EvnetService) { }

    doner:number;
    employee:number;
    volunteer:number;
    event:number;
    //count:any;
  ngOnInit(): void {
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











       // this.count[result];
        // this.data=this.count.length;
       
        //console.log( result.length);
        // for (let data in result)
        // {
        //   this.count=this.data;
        //   this.data++;
        //   console.log("kkkk"+this.count);
        // }
        //console.log("kkkk"+this.data);
          
        
      //   this.donerList = result.content;
      //   this.totalCount = result.totalElements
      //  console.log("vcvv"+this.totalCount);
  
      
      // this.donerService.countDoner();

      //   this.data=this.donerService.getAllActiveDoner();
      
      // console.log("-----"+this.donerService.countDoner);
     
  
       



