import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/common/common.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { EvnetService } from 'src/app/services/event.service';
import { VolunteerService } from 'src/app/services/volunteer.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  constructor(private eventService: EvnetService,
    private commonService: CommonService,
    private employeeService: EmployeeService,
    private volunteerService : VolunteerService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  eventFrom: FormGroup;
  eventId: any;
  isAddFrom: boolean = true;
  employeeList: any = [];
  volunteerList : any = [];

  async ngOnInit() {

    this.iniatilzeFrom();
    await this.getActiveEmployee();

    this.eventId = this.activatedRoute.queryParams['value'].id;
    if (this.eventId == undefined || this.eventId == null) {
      setTimeout(() => {
        this.commonService.currentPageTitle = 'Add Event';
      });

    }
    else {
      setTimeout(() => {
        this.commonService.currentPageTitle = 'Edit Event';
      });
      this.isAddFrom = false;
      this.eventService.getIdEvent(this.eventId).subscribe((results) => {
        console.log(results);
        this.eventFrom.controls.name.setValue(results.name);
        this.eventFrom.controls.id.setValue(results.id);
        this.eventFrom.controls.startDate.setValue(results.startDate);
        this.eventFrom.controls.endDate.setValue(results.endDate);
        this.eventFrom.controls.address.setValue(results.address);
        this.eventFrom.controls.sponsors.setValue(results.sponsors);
        this.eventFrom.controls.description.setValue(results.description);
        this.eventFrom.controls.type.setValue(results.type);
        this.eventFrom.controls.contactPerson.setValue(results.contactPerson);
        this.eventFrom.controls.contactEmail.setValue(results.contactEmail);
        this.eventFrom.controls.contactNumber.setValue(results.contactNumber);
        this.eventFrom.controls.employeeIds.setValue(results.employeeIds);

      }, (error) => {
        this.commonService.showMessage("error", error.message);
      });
    }

  }

  iniatilzeFrom() {
    this.eventFrom = new FormGroup({

      id: new FormControl(''),

      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),

      startDate: new FormControl('', [Validators.required]),

      endDate: new FormControl('', [Validators.required]),

      address: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]),

      volunteer: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),

      sponsors: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),

      description: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]),

      type: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),

      contactPerson: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),

      contactEmail: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),

      contactNumber: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]),

      employeeIds: new FormControl([]),

      volunteerIds: new FormControl([]),

    });
  }


  submit() {
    this.eventFrom.markAllAsTouched();
    console.log("hello");
    if (this.eventFrom.valid) {
      console.log("hello");
      this.eventService.addEvent(this.eventFrom.value).subscribe((results) => {
        let msg;
        if (this.isAddFrom) {
          msg = "Event Added Sucessfully";
        } else {
          msg = "Event Updated Sucessfully";
        }
        this.commonService.showMessage("success", msg);
        this.router.navigate(['/event']);
      }, (error) => {
        this.commonService.showMessage("error", error.message);
      });

    }
  }

  getActiveEmployee() {

    this.employeeService.getAllActiveEmployee().subscribe((results) => {
      this.employeeList = results;
      console.log(this.employeeList)
    }, (error) => {
      this.commonService.showMessage("error", error.message);
    });
  }

  getActiveVolunteer() {

    this.volunteerService.getAllActiveVolunteer().subscribe((results) => {
      this.volunteerList = results;
      console.log(this.volunteerList)
    }, (error) => {
      this.commonService.showMessage("error", error.message);
    });
  }

}



