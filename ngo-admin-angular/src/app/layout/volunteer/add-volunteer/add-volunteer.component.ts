import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/common/common.service';
import { VolunteerService } from 'src/app/services/volunteer.service';

@Component({
  selector: 'app-add-volunteer',
  templateUrl: './add-volunteer.component.html',
  styleUrls: ['./add-volunteer.component.css']
})
export class AddVolunteerComponent implements OnInit {
  volunteerId: any;
  isAddForm=true;
  
  constructor(private volunteerService: VolunteerService,
    private commonService: CommonService,
    private router: Router,private activatedRoute : ActivatedRoute) { }

  volunteerForm: FormGroup;
  ngOnInit(): void {
   
    this.iniatilzeForm();
    this.volunteerId=this.activatedRoute.queryParams['value'].id;

    if(this.volunteerId==undefined || this.volunteerId==null)
    {
      setTimeout(() => {
        this.commonService.currentPageTitle = 'Add Volunteer';
      });
    }
    else
    {
      this.isAddForm=false;
      setTimeout(() => {
        this.commonService.currentPageTitle = 'Edit Volunteer';
      });
      
        this.volunteerService.getIdVolunteer(this.volunteerId).subscribe((results)=> {
            this.volunteerForm.controls.name.setValue(results.name);
            this.volunteerForm.controls.address.setValue(results.address);
            this.volunteerForm.controls.email.setValue(results.email);
            this.volunteerForm.controls.gender.setValue(results.gender);
            this.volunteerForm.controls.age.setValue(results.age);
            this.volunteerForm.controls.areaOfInterest.setValue(results.areaOfInterest);
            this.volunteerForm.controls.dateOfJoining.setValue(results.dateOfJoining);
            this.volunteerForm.controls.contactNumber.setValue(results.contactNumber);
            this.volunteerForm.controls.availableTime.setValue(results.availableTime);
            this.volunteerForm.controls.id.setValue(results.id);

                });
      
    }
  }
  iniatilzeForm() {
    this.volunteerForm = new FormGroup({
      id:new FormControl(''),
      name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),

      email: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),

      contactNumber: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]),

      address: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]),

      age: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(5)]),

      gender: new FormControl('', [Validators.required]),

      dateOfJoining: new FormControl('', [Validators.required]),

      availableTime: new FormControl('', [Validators.required]),

      areaOfInterest: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(80)])

    });
  }

  submit() {
    this.volunteerForm.markAllAsTouched();

    if (this.volunteerForm.valid) {
      this.volunteerService.addVolunteer(this.volunteerForm.value).subscribe((results) => {
        this.commonService.showMessage("success", "Volunteer Added Sucessfully");
        this.router.navigate(['/volunteer']);
      }, (error) => {
        this.commonService.showMessage("error", error.message);
      });
    }
  }

}